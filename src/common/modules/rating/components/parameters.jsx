import React from 'react';

import injectSheet from '../../../../client/jss-config';
import styles from '../styles/parameters';

type ParameterProps = {
  sheet: { classes: Object },
  scores: Array<number>,
  source: Object,
};

const Container = ({
  sheet: { classes },
  source,
}: ParameterProps) => (
  <div className={`attribute ${classes.sourceContainer}`}>
    <div
      className={classes.source}
    >
      <div className={classes.overlay} />
      <div className={classes.innerOverlay} />
      <span className={classes.sourceName}>{source.title}</span>
      <div
        className={classes.sourceImage}
        style={{ backgroundImage: `url(${source.image})` }}
      />
    </div>
  </div>

  );

export default injectSheet(styles)(Container);
