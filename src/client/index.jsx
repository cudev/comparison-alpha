import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, match } from 'react-router/es';
import { syncHistoryWithStore } from 'react-router-redux';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';

import configureStore from '../common/store';
import createRoutes from '../common/routes';
import { stylesElementId } from '../server/render-initial-view';

const apolloClient = new ApolloClient();

const store = configureStore(browserHistory, window.initialState, apolloClient);
const history = syncHistoryWithStore(browserHistory, store);

function removeServerGeneratedStyles() {
  const stylesElement = document.getElementById(stylesElementId);
  if (!stylesElement) {
    return;
  }
  stylesElement.parentNode.removeChild(stylesElement);
}

match({ history, routes: createRoutes(store) }, (error, redirectLocation, renderProps) => {
  render(
    <ApolloProvider store={store} client={apolloClient}>
      <Router {...renderProps} />
    </ApolloProvider>,
    document.querySelector('#app'),
    removeServerGeneratedStyles,
  );
});
