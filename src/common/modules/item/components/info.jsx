// @flow
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

import injectSheet from '../../../../client/jss-config';
import Ellipsis from '../../../ellipsis';
import styles from '../styles/info';

type ItemProps = {
  sheet: { classes: Object },
  position: number,
  image: string,
  itemName: string,
  isOpened: boolean,
  itemSlug: string,
};

function getAwardImage(position) {
  if (position > 3 || !position) {
    return '';
  }
  return `/images/position${position}.png`;
}

const Image = ({
  sheet: { classes },
  position,
  image,
  itemName,
  isOpened,
  itemSlug,
}: ItemProps) => {
  const award = getAwardImage(position);
  return (
    <div
      className={classNames(classes.container, { [classes.containerClosed]: !isOpened })}
    >
      {
        position ?
          <div
            className={classes.position}
            style={{ backgroundImage: `url('${award}')` }}
          /> : null
      }
      <div className={classes.imageContainer}>
        <Link
          to={`/product/${itemSlug}`}
        >
          <img
            src={image} className={classes.image}
            alt={classes.itemName}
          />
        </Link>
      </div>
      <div
        className={classes.shadow}
      />
      <Link
        to={`/product/${itemSlug}`}
        className={classes.resetLink}
      >
        <Ellipsis lines={2} className={classes.itemName}>
          {itemName}
        </Ellipsis>
      </Link>
    </div>
  );
};

export default injectSheet(styles)(Image);
