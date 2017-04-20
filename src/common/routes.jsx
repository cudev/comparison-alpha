import app from './modules/app';

const App = app.components.App;

function loadRoute(callback) {
  return module => callback(null, module.default);
}

/* eslint-disable no-console */
export default function createRoutes() {
  return [
    {
      component: App,
      path: '/',
      indexRoute: {
        getComponent(location, callback) {
          System.import('./modules/home/components/home').then(loadRoute(callback)).catch(console.log);
        },
      },
      childRoutes: [
        {
          path: 'comparison/:slug',
          getComponent(location, callback) {
            System.import('./modules/comparison/components/comparison').then(loadRoute(callback)).catch(console.log);
          },
        },
        {
          path: 'product/:slug',
          getComponent(location, callback) {
            System.import('./modules/product/components/product').then(loadRoute(callback)).catch(console.log);
          },
        },
        {
          path: 'search-result/:searchResultSlug',
          getComponent(location, callback) {
            System.import('./modules/search-result-page/components/search-result-page').then(loadRoute(callback)).catch(console.log);
          },
        },
        {
          path: 'not-found',
          getComponent(location, callback) {
            System.import('./modules/404/components/404').then(loadRoute(callback)).catch(console.log);
          },
        },
        {
          path: '*',
          getComponent(location, callback) {
            System.import('./modules/404/components/404').then(loadRoute(callback)).catch(console.log);
          },
        },
      ],
    },
  ];
}
/* eslint-enable no-console */
