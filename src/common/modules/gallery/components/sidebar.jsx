// @flow
import React from 'react';
import classNames from 'classnames';

import injectSheet from '../../../../client/jss-config';
import styles from '../styles/sidebar';
import Rating from '../../core/components/rating-circle';

type SidebarProps = {
  sheet: { classes: Object },
  rating: number,
  position: number,
  awards: Array<Object>,
  price: number,
  currency: string,
  producer: string,
  comparison: string,
  marketLink: string,
};

const Sidebar = ({
  sheet: { classes },
  rating,
  position,
  comparison,
  awards,
  price,
  currency,
  producer,
  marketLink,
}: SidebarProps) => (
  <div className={classes.sidebar}>
    <div className={classes.rating}>
      <div className={classes.title}>Total rating</div>
      <div className={classes.ratingContainer}>
        <div className={classes.ratingCircle}>
          <Rating rating={rating} radius={33} renderNumber={false} />
        </div>
        <div className={classes.ratingData}>
          <span>{rating}</span>
          <span className={classes.fractional}>/10</span>
        </div>
      </div>
    </div>
    <div className={classes.ranking}>
      <div className={classes.title}>Ranking</div>
      <div className={classes.position}>
        <i className={classNames('ion-stats-bars', classes.icon)} />
        <div className={classes.number}>
          {position}
          <span className={classes.suffix}>th</span>
        </div>
        <span className={classes.comparison}>on {` ${comparison}`}</span>
      </div>
    </div>
    <div className={classes.awards}>
      <div className={classes.title}>Awards</div>
      <div className={classes.awardContainer}>{awards.map(award => (<div
        key={award.index}
        className={classes.award}
      >
        <img src={award.name} width="47" alt={award} />
      </div>))}</div>
    </div>
    <div>
      <div className={classes.title}>Best price</div>
      <div className={classes.price}>
        <div className={classes.buttonContainer}>
          <a
            className={classes.button}
            href={marketLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            See it
          </a>
        </div>
        <div className={classes.dataContainer}>
          <div className={classes.leftContainer}>
            <div className={classes.bar} />
            <div className={classes.signContainer}>
              <img src="/images/apple.png" className={classes.producerSign} width="47" alt="producer" />
            </div>
            <div>
              <span className={classes.producer}>{producer}</span>
            </div>
          </div>
          <div className={classes.rightContainer}>
            <div className={classes.priceContainer}>
              <span className={classes.amount}>{currency}{price.toFixed(2)}</span>
              <span className={classes.option}>+ Free shipping</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );

export default injectSheet(styles)(Sidebar);
