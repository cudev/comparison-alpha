// @flow
import React from 'react';

import injectSheet from '../../../../client/jss-config';
import styles from '../styles/loader';

type Loader = {
  sheet: { classes: Object },
  color: string
};

const Preloader = ({
  sheet: { classes },
  color,
}: Loader) => (
  <div
    className={classes.loader}
    style={{
      border: `1.1em solid rgba(${color}, 0.2)`,
      borderLeft: `1.1em solid rgb(${color})`,
    }}
  />
);

export default injectSheet(styles)(Preloader);

