// @flow
import React from 'react';

import injectSheet from '../../../../client/jss-config';
import styles from '../styles/advertisement-list';

type AdvertisementProps = {
  sheet: { classes: Object },
  advertisementData: Array<Object>,
};

const Container = ({
  sheet: { classes },
  advertisementData,
}: AdvertisementProps) => (
  <div className={classes.advertisementContainer}>
    {
        advertisementData.map(element => (
          <div
            key={element.index}
            className={classes.advertisementWrapper}
          >
            <img
              className={classes.advertisement}
              alt={element.company}
              src={element.image}
            />
          </div>
        ))
      }
  </div>
  );

export default injectSheet(styles)(Container);
