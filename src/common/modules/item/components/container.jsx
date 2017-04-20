// @flow
import React, { Component } from 'react';
import classNames from 'classnames';

import injectSheet from '../../../../client/jss-config';
import Item from './item';
import styles from '../styles/container';

type ContainerProps = {
  sheet: { classes: Object },
  getColumnWidth: Object,
  getImageWidth: Object,
  position: number,
  image: string,
  itemName: string,
  itemSlug: string,
  market: string,
  price: number,
  currency: string,
  rating: number,
  handleClosedItem: Object,
  closedItem: Array<Object>,
  handleResize: Object,
  document: Object,
};

class Container extends Component {
  state: {
    isOpened: boolean,
  };

  document: Object;

  constructor(props: ContainerProps) {
    super(props);
    this.state = {
      isOpened: true,
    };
    (this:any).handleBlockResize = this.handleBlockResize.bind(this);
  }

  handleBlockResize(event: Object) {
    if (this.props.document) {
      //--------------
      // for test coverage create own variable document
      //--------------
      this.document = this.props.document;
    } else {
      this.document = document;
    }

    this.props.handleClosedItem(this.props.position);
    const closedContainer = event.target.parentNode.parentNode.querySelector('.container');
    const closedTextContainer = this.document.querySelectorAll(`.textContainer-${this.props.position}`);
    if (this.state.isOpened) {
      closedContainer.classList.add('closedContainer');
      Array.from(closedTextContainer).forEach((element) => {
        // eslint-disable-next-line no-param-reassign
        element.classList.add('closedTextContainer');
        // eslint-disable-next-line no-param-reassign
        element.style.minWidth = `${this.props.getColumnWidth()}px`;
      });
    } else {
      closedContainer.classList.remove('closedContainer');
      Array.from(closedTextContainer).forEach((element) => {
        // eslint-disable-next-line no-param-reassign
        element.classList.remove('closedTextContainer');
        // eslint-disable-next-line no-param-reassign
        element.style.minWidth = '';
      });
    }
    this.setState({
      isOpened: !this.state.isOpened,
    });
    this.props.handleResize();
  }

  render() {
    const {
      sheet: { classes },
      getColumnWidth,
      closedItem,
      position,
      image,
      itemName,
      itemSlug,
      market,
      price,
      currency,
      rating,
      handleResize,
    } = this.props;
    const { isOpened } = this.state;
    const buttonStyle = (position === 1) ? { display: 'none' } : { display: 'block' };
    return (
      <div
        className={`
        container
        ${position === 1 ? 'firstContainer' : ''}
        ${classNames(classes.container, { [classes.containerClosed]: !isOpened })}`}
      >
        <div
          className={classNames({ [classes.overlay]: !isOpened })}
        />
        <button
          className={classNames(
            { [classes.button]: isOpened },
            { [classes.buttonClosed]: !isOpened },
            )}
          style={buttonStyle}
          onClick={this.handleBlockResize}
        >
          <i
            className={classNames(
              { 'ion-eye-disabled': isOpened },
              { 'ion-eye': !isOpened },
              { [classes.eye]: isOpened },
              )}
          />
        </button>
        <Item
          getColumnWidth={getColumnWidth}
          closedItem={closedItem}
          isOpened={isOpened}
          position={position}
          image={image}
          itemName={itemName}
          itemSlug={itemSlug}
          market={market}
          price={price}
          currency={currency}
          rating={rating}
          handleResize={handleResize}
        />
      </div>
    );
  }
}

export default injectSheet(styles)(Container);

export { Container as ContainerWithoutJSS };
