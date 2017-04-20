// @flow
import React, { Children } from 'react';
import Helmet from 'react-helmet';

import injectSheet from '../../../../client/jss-config';
import styles from '../styles/app';
import pageHeader from '../../page-header/';
import pageFooter from '../../page-footer/';
import config from '../../../config';

const PageHeader = pageHeader.components.Header;
const PageFooter = pageFooter.components.Footer;

type AppProps = { sheet: { classes: Object }, children?: Children, router: Object };

function App(props: AppProps) {
  const { sheet: { classes }, children } = props;
  return (
    <div className={classes.app}>
      <Helmet
        title="Very nice site please see"
        meta={[
          { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
          { name: 'description', content: 'home page content' },
          { name: 'keywords', content: 'custom keywords' },
          { name: 'msapplication-tap-highlight', content: 'no' },
          { property: 'og:title', content: 'title' },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: `http://${config.host}:3000/` },
          { property: 'og:image', content: 'image.url' },
          { property: 'og:description', content: 'description' },
        ]}
        link={[
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Libre+Franklin:300|Prompt:100,300,500,600,700e',
          },
          {
            rel: 'stylesheet',
            href: 'http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css',
          },
        ]}
      />
      <div className={classes.mainContainer}>
        <PageHeader
          logoSrc="/images/logo.svg"
          items={[
            'Top of 2016', 'Top camera', 'Top Android', 'Top Windows', 'Top prepaid',
            'Best Verizon Wireless phones of 2016', 'Best AT&T phones',
            'Best U.S. Cellular phones of 2016', 'Best T-Mobile phones of 2016',
          ]}
        />
        <main className={classes.main}>
          {children}
        </main>
      </div>
      <PageFooter />
    </div>
  );
}

App.defaultProps = {
  children: [],
};

export default injectSheet(styles)(App);
