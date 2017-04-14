// @flow
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import ApolloClient from 'apollo-client';

import app from './root-reducer';

export default (history: Object, initialState: Object, apolloClient: ApolloClient): Object => {
  app.apollo = apolloClient.reducer();

  return createStore(
    combineReducers(app),
    initialState,
    compose(applyMiddleware(thunk, routerMiddleware(history), apolloClient.middleware()),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
        ? window.devToolsExtension()
        : f => f,
    ),
  );
};
