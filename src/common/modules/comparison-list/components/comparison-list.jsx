// @flow
import React from 'react';
import classNames from 'classnames';

import injectSheet from '../../../../client/jss-config';
import comparisonCard from '../../comparison-card';
import styles from '../styles/comparison-list';

const ComparisonCard = comparisonCard.components.ComparisonCard;

type ComparisonContainer = {
  sheet: { classes: Object },
  comparisonData: Array<Object>,
};

const ComparisonList = ({
  sheet: { classes },
  comparisonData,
}: ComparisonContainer) => (
  <div className={classes.comparisonContainer}>
    {
      [...comparisonData].map(element => (
        <div
          key={element._id}
          className={classNames(classes.comparisonWrapper)}
        >
          <ComparisonCard {...element} views={45} place={3} postedDate={1486052149658} />
        </div>
      ))
    }
  </div>
);

export default injectSheet(styles)(ComparisonList);
