// @flow
import serialize from 'serialize-javascript';
import config from '../common/config';

export const stylesElementId = 'initial-styles';

export default function renderFullPage(
  renderedApp: string,
  initialState: Object,
  styles: string,
  head: Object,
): string {
  return `
  <!doctype html>
  <html ${head.htmlAttributes}>
    <head>
      ${head.title}
      ${head.meta}
      ${head.link}
      <meta charset="UTF-8">
      <script>
        window.config = ${serialize(config)};
        window.initialState = ${serialize(initialState)};
      </script>
      <style type="text/css" id="${stylesElementId}">
        ${styles}
      </style>
    </head>
    <body style="background: #e5e5e5; margin: 0; padding: 0;">
      <div id="app" style="min-height:100vh; display: flex; flex-direction: column">${renderedApp}</div>
      <script src="${config.assets}/scripts/vendor.js"></script>
      <script src="${config.assets}/scripts/bundle.js"></script>
    </body>
  </html>
  `;
}
