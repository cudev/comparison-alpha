// @flow
import React from 'react';

import injectSheet from '../../../../client/jss-config';
import ComparisonList from '../../comparison-list';
import AdvertisementList from '../../advertisement-list';
import styles from '../styles/comparison-card-container';

type ComparisonContainer = {
  sheet: { classes: Object },
  comparisonData: Array<Object>,
  advertisementData: Array<Object>,
  children: Array<Object>,
};

const ComparisonCardContainer = ({
  sheet: { classes },
  comparisonData,
  advertisementData,
  children,
}: ComparisonContainer) => (
  <div className={classes.container}>
    <div className={classes.title}>All comparisons</div>
    <div className={classes.comparisonCardContainer}>
      <div className={classes.specificationComparisonContainer}>
        <ComparisonList comparisonData={comparisonData} />
        <div className={classes.specificationContainer}>
          {children}
        </div>
      </div>
      <AdvertisementList advertisementData={advertisementData} />
    </div>
  </div>
  );

export default injectSheet(styles)(ComparisonCardContainer);
