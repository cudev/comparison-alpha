import express from 'express';
import React from 'react';
import { createMemoryHistory, match, RouterContext } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import winston from 'winston';
import path from 'path';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider, renderToStringWithData } from 'react-apollo';
import { SheetsRegistryProvider, SheetsRegistry } from 'react-jss';
import Helmet from 'react-helmet';
import 'isomorphic-fetch';
import bodyParser from 'body-parser';
import 'object-assign';

import config from '../common/config';
import configureStore from '../common/store';
import createRoutes from '../common/routes';
import renderInitialView from './render-initial-view';
import actualEndpointProxy from './actual-endpoint-proxy';

const app = express();

app.get('/favicon.ico', (req, res) => {
  res.status(200).end();
});
app.post('/graphql', bodyParser.json(), actualEndpointProxy);

app.use(express.static(path.normalize(`${__dirname}/../client`)));

app.use((req, res) => {
  const memoryHistory = createMemoryHistory(req.url);

  const apolloClient = new ApolloClient({
    ssrMode: true,
    // Remember that this is the interface the SSR server will use to connect to the
    // API server, so we need to ensure it isn't firewalled, etc
    networkInterface: createNetworkInterface({
      uri: 'http://localhost:3000/graphql',
      credentials: 'same-origin',
      // transfer request headers to networkInterface so that they're accessible to proxy server
      // Addresses this issue: https://github.com/matthew-andrews/isomorphic-fetch/issues/83
      headers: req.headers,
    }),
  });
  const initialState = {};
  const store = configureStore(memoryHistory, initialState, apolloClient);
  const history = syncHistoryWithStore(memoryHistory, store);
  match(
    { history, routes: createRoutes(store), location: req.originalUrl },
    (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        const sheetsRegistry = new SheetsRegistry();
        const component = (
          <SheetsRegistryProvider registry={sheetsRegistry} >
            <ApolloProvider store={store} client={apolloClient}>
              <RouterContext {...renderProps} />
            </ApolloProvider>
          </SheetsRegistryProvider>
        );

        renderToStringWithData(component).then((content) => {
          res.send(
            renderInitialView(
              content,
              store.getState(),
              sheetsRegistry.toString(),
              Helmet.rewind(),
            ),
          );
        }).catch(dataError => winston.error('RENDERING ERROR:', dataError));
      }
    },
  );
});

app.listen(config.port, '0.0.0.0', () => {
  winston.info('Server started');
});
