// @flow
import React, { Component } from 'react';
import classNames from 'classnames';

import injectSheet from '../../../../client/jss-config';
import Info from './info';
import Price from './price';
import Rating from '../../rating';
import styles from '../styles/item';

const RatingContainer = Rating.components.Rating;

type ItemProps = {
  sheet: { classes: Object },
  isOpened: boolean,
  getColumnWidth: Object,
  position: number,
  image: string,
  itemName: string,
  itemSlug: string,
  market: string,
  price: number,
  currency: string,
  rating: number,
  window: Object,
  document: Object,
  handleResize: Object,
};

function applyWidth(elements, columnWidth) {
  elements.forEach((element) => {
    // eslint-disable-next-line no-param-reassign
    element.style.minWidth = `${columnWidth}px`;
  });
}

class Item extends Component {
  window: Object;
  item: Object;
  ratingContainer: Object;
  itemContainer: Object;
  document: Object;

  constructor(props: ItemProps) {
    super(props);
    (this:any).onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    if (this.props.window) {
      //--------------
      // for test coverage create own variable window
      //--------------
      this.window = this.props.window;
    } else {
      this.window = window;
    }
    if (this.window.addEventListener) {
      this.window.addEventListener('resize', this.onResize);
    }
  }
  onResize() {
    this.props.handleResize();
    if (this.props.document) {
      //--------------
      // for test coverage create own variable document
      //--------------
      this.document = this.props.document;
    } else {
      this.document = document;
    }
    const columnWidth = this.props.getColumnWidth();
    const containers = Array.from(this.document.querySelectorAll('.closedContainer'));
    const textContainers = Array.from(this.document.querySelectorAll('.closedTextContainer'));
    applyWidth(containers, columnWidth);
    applyWidth(textContainers, columnWidth);
  }

  render() {
    const {
      sheet: { classes },
      getColumnWidth,
      isOpened,
      position,
      image,
      itemName,
      itemSlug,
      market,
      price,
      currency,
      rating,
    } = this.props;
    const containerStyle = isOpened ? {} : { minWidth: getColumnWidth() };
    return (
      <div
        className={`container ${classes.container}`}
        style={containerStyle}
        ref={(item) => { this.item = item; }}
      >
        <div className={classNames('itemContainer', classes.itemContainer)}>
          <Info
            className={classes.info}
            position={position}
            image={image}
            itemName={itemName}
            isOpened={isOpened}
            itemSlug={itemSlug}
          />
          <Price
            market={market}
            price={price}
            currency={currency}
          />
        </div>
        <div
          className={classes.ratingContainer}
        >
          <RatingContainer
            rating={rating}
            position={position}
          />
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Item);
