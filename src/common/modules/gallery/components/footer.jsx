// @flow
import React from 'react';

import injectSheet from '../../../../client/jss-config';
import styles from '../styles/footer';
import Rating from '../../core/components/rating-circle';

type FooterProps = {
  sheet: { classes: Object },
  ratings: Array<Object>,
};

const Footer = ({
  sheet: { classes },
  ratings,
}: FooterProps) => {
  const ratingDivs = ratings.map((rating) => {
    const { score, source: { image, title } } = rating;
    return (<div
      className={classes.rating}
      key={`${score}-${image}-${title}`}
    >
      <div className={classes.cite}>{title}</div>
      <div className={classes.leftBar}>
        <div className={classes.overlay} />
        <div className={classes.innerOverlay} />
        <div
          className={classes.sourceImage}
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <div className={classes.rightBar}>
        <div className={classes.ratingWrapper} >
          <Rating rating={score} radius={22} renderNumber={false} />
        </div>
        <div className={classes.ratingData}>
          <span>{score}</span>
          <span className={classes.fractional}>/10</span>
        </div>
      </div>
    </div>);
  });
  return (
    <div className={classes.footer}>
      <div className={classes.title}>External rating</div>
      <div className={classes.ratingContainer}>
        {ratingDivs}
      </div>
    </div>
  );
};

export default injectSheet(styles)(Footer);
