// @flow
import React from 'react';
import month from 'month';
import numeral from 'numeral';
import { Link } from 'react-router';

import injectSheet from '../../../../client/jss-config';
import styles from '../styles/comparison-card';
import Ellipsis from '../../../../common/ellipsis';
import fetchData from '../../core/fetch-data';

const { getEnglishContent } = fetchData;

type CardProps = {
  sheet: { classes: Object },
  posted: number,
  views: number,
  title: Array<Object>,
  image: string,
  place: number,
  slug: string,
  postedDate: number,
};

const ComparisonCard = ({
  sheet: { classes },
  slug,
  title,
  image,
  views,
  place,
  postedDate,
}: CardProps) => {
  const fullDate = new Date(postedDate);
  const postingDate = `${month(fullDate.getMonth() + 1)} ${fullDate.getDate()}, ${fullDate.getFullYear()}`;
  const viewsQuantity = views > 1000 ? numeral(views).format('0a') : views;
  return (
    <div className={classes.container}>
      <Link
        className={classes.button}
        to={`/comparison/${slug}`}
      >
        <div className={classes.buttonTextWrapper}>
          <div>
            <span className={classes.buttonTitle}>
                 See comparison
            </span>
            &nbsp;
          </div>
          <div className={classes.arrowWrapper}>
            <i className="ion-chevron-right" />
          </div>
        </div>
      </Link>
      <div className={classes.image} style={{ backgroundImage: `url(${image})` }}>
        <div className={classes.overlay} />
        <div className={classes.statistics}>
          <div className={classes.post}>
            <span className={classes.property}>
              Posted
            </span>
            <span>
              {postingDate}
            </span>
          </div>
          <div className={classes.view}>
            <span className={classes.property}>
              Views
            </span>
            <span>
              {viewsQuantity}
            </span>
          </div>
        </div>
      </div>
      <div className={classes.header}>
        {
          place ? (
            <div className={classes.placeWrapper}>
              <div className={classes.place}>
                <span className={classes.number}>{place}</span>
                <span className={classes.prefix}>th</span>
                <span className={classes.preposition}>in</span>
              </div>
            </div>
          ) : null
        }
        <div className={classes.title}>
          <div className={classes.textWrapper}>
            <Ellipsis lines={2}>
              {getEnglishContent(title)}
            </Ellipsis>
          </div>
        </div>
      </div>
    </div>
  );
};

export default injectSheet(styles)(ComparisonCard);
