// @flow
import React from 'react';

import injectSheet from '../../../../../../client/jss-config';
import styles from '../styles/circle';

type ItemProps = {
  sheet: { classes: Object },
  rating: number,
  radius: number,
  renderNumber: boolean,
};

const Circle = ({
  sheet: { classes },
  rating,
  radius,
  renderNumber,
}: ItemProps) => {
  const r = radius || 45;
  const strokeDasharray = 2 * 3.14 * r;
  const ratingNumber = +rating.toFixed(1);
  const strokeDashoffset = strokeDasharray * ((10 - ratingNumber) / 10);
  const d = (r * 2) + 10;
  const circleStyle = { width: d, height: d };

  return (
    <div className={classes.container}>
      <div
        className={classes.ratingContainer}
        style={circleStyle}
      >
        {
          renderNumber ?
            <div className={classes.rating}>
              {ratingNumber}
              <span className={classes.fractional}>/10</span>
            </div>
          : null
        }
        <svg
          style={circleStyle}
          className={classes.circle}
          viewBox="0 0 100 100"
          preserveAspectRatio="xMinYMin meet"
        >
          <circle
            cx="50"
            cy="50"
            r={r}
            stroke="#f9f9f9"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r={r}
            stroke="#b3b3b3"
            strokeWidth="10"
            strokeDasharray={strokeDasharray.toFixed()}
            strokeDashoffset={strokeDashoffset.toFixed()}
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Circle);
