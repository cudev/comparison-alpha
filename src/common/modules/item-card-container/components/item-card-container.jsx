// @flow
import React from 'react';
import { Link } from 'react-router';

import injectSheet from '../../../../client/jss-config';
import itemContainer from '../../item';
import Rating from '../../core/components/rating-circle';
import styles from '../styles/item-card-container';
import fetchData from '../../core/fetch-data';

const { compareItem, getEnglishContent } = fetchData;

const Info = itemContainer.components.Info;

type ItemContainer = {
  sheet: { classes: Object },
  items: Array<Object>,
  comparisonSlug: string,
};

const ItemCardContainer = ({
  sheet: { classes },
  items,
  comparisonSlug,
}: ItemContainer) => (
  <div className={classes.container}>
    <div className={classes.innerContainer}>
      <div className={classes.innerWrapper}>
        {
          Array.from(items).sort(compareItem).map((item, index) => (
            <div key={item._id} className={classes.itemContainer}>
              <Info
                position={index + 1}
                image={item.images[0].substring(item.images[0])}
                itemName={getEnglishContent(item.name)}
                itemSlug={item.slug}
              />
              <Rating
                renderNumber
                rating={Array.from(item.rating).map(el => el.score)
                 .reduce((prev, curr) => prev + curr) / item.rating.length}
              />
            </div>
          ))
        }
      </div>
    </div>
    <Link
      className={classes.buttonWrapper}
      to={`/comparison/${comparisonSlug}`}
    >
      <button className={classes.button}>
        <div className={classes.buttonTextWrapper}>
          <span className={classes.buttonTitle}>See comparison</span>
         &nbsp;
          <i className="ion-chevron-right" />
        </div>
      </button>
    </Link>
  </div>
);

export default injectSheet(styles)(ItemCardContainer);
