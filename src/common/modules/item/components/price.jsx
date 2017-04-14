// @flow
import React from 'react';

import injectSheet from '../../../../client/jss-config';
import styles from '../styles/price';

type ItemProps = {
  sheet: { classes: Object },
  item: string,
  market: string,
  price: number,
  currency: string,
  isOpened: boolean
};

const Data = ({
  sheet: { classes },
  market,
  price,
  currency,
}: ItemProps) => {
  const wholePrice = Math.floor(price);
  const fractionalPrice = (price - wholePrice).toFixed(2).substr(2, 2);
  return (
    <div className={classes.container}>
      <div className={classes.market} >
        <span>
          {market}
        </span>
      </div>
      <div className={classes.price} >
        <span className={classes.whole}>
          {`${currency}${wholePrice}`}
        </span>
        <span className={classes.fractional}>
          {`.${fractionalPrice}`}
        </span>
      </div>
      <button
        className={classes.button}
      >
        See it
      </button>
    </div>
  );
};

export default injectSheet(styles)(Data);
