import React from 'react';
import classNames from 'classnames';

import injectSheet from '../../../../client/jss-config';
import Circle from '../../core/components/rating-circle';
import styles from '../styles/container';

type ContainerProps = {
  sheet: { classes: Object },
  rating: number,
  getRatingTop: Object,
  position: number,
};

const Container = ({
  sheet: { classes },
  rating,
  position,
}: ContainerProps) => (
  <div className={classes.container}>
    <div className={classes.header}>
      {
        position === 1 ?
          <div className={`attribute ${classNames(classes.fixed, classes.title)}`}>
            Total Rating
          </div> : null
      }
    </div>
    <div className={classes.circleContainer}>
      <Circle
        rating={rating}
        renderNumber
      />
    </div>
  </div>
);

export default injectSheet(styles)(Container);
