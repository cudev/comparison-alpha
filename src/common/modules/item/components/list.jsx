// @flow
import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import injectSheet from '../../../../client/jss-config';
import Container from './container';
import rating from '../../rating/index';
import Table from '../../settings/components/table';
import styles from '../styles/list';
import fetchData from '../../core/fetch-data';

const RatingTable = rating.components.Table;
const { compareItem } = fetchData;

type ContainerProps = {
  sheet: { classes: Object },
  items: Array<Object>,
  parameters: Array<Object>,
  ratings: Object,
};

/* istanbul ignore next */
function getColumnWidth() {
  const container = document.querySelector('.firstContainer');
  if (container) {
    return container.clientWidth;
  }
  return null;
}

export class List extends Component {
  state: {
    closedItem: Array<number>,
    draggable: boolean,
  };

  elements: Array<Object>;
  itemContainer: ?HTMLElement;
  container: Object;
  scroll: ?HTMLElement;
  trackHorizontal: ?HTMLElement;

  constructor(props: ContainerProps) {
    super(props);
    this.state = {
      closedItem: [],
      draggable: false,
    };
    (this:any).handleClosedItem = this.handleClosedItem.bind(this);
    (this:any).handleScroll = this.handleScroll.bind(this);
    (this:any).manageContainer = this.manageContainer.bind(this);
    (this:any).handleScrollChange = this.handleScrollChange.bind(this);
    (this:any).switchOnDraggableState = this.switchOnDraggableState.bind(this);
    (this:any).switchOffDraggableState = this.switchOffDraggableState.bind(this);
    (this:any).handleDragScroll = this.handleDragScroll.bind(this);
    (this:any).handleResize = this.handleResize.bind(this);
  }


  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollChange);
    const scroll = document.querySelector(`.${this.props.sheet.classes.trackView}`);
    const itemContainer = document.querySelector('.itemContainer');
    const trackHorizontal = document.querySelector(`.${this.props.sheet.classes.trackHorizontal}`);
    if (!scroll || !itemContainer || !trackHorizontal) {
      throw new Error();
    }
    scroll.addEventListener('mousedown', this.switchOnDraggableState);
    scroll.addEventListener('mouseup', this.switchOffDraggableState);
    scroll.addEventListener('mouseleave', this.switchOffDraggableState);
    scroll.addEventListener('mousemove', this.handleDragScroll);
    scroll.addEventListener('scroll', this.handleScroll);
    this.scroll = scroll;
    this.itemContainer = itemContainer;
    this.trackHorizontal = trackHorizontal;
    // this.handleResize();
  }
  componentDidUpdate() {
    this.handleResize();
  }
  componentWillUnmount() {
    const { scroll } = this;
    if (!scroll) {
      throw new Error();
    }
    scroll.removeEventListener('mousedown', this.switchOnDraggableState);
    scroll.removeEventListener('mouseup', this.switchOffDraggableState);
    scroll.removeEventListener('mouseleave', this.switchOffDraggableState);
    scroll.removeEventListener('mousemove', this.handleDragScroll);
    scroll.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('scroll', this.handleScrollChange);
  }

  switchOnDraggableState() {
    this.setState({
      draggable: true,
    });
  }

  switchOffDraggableState() {
    this.setState({
      draggable: false,
    });
  }

  handleDragScroll(event: MouseEvent) {
    if (this.state.draggable && this.scroll) {
      this.scroll.scrollLeft = this.scroll.scrollLeft - event.movementX;
    }
  }

  handleClosedItem(position: number) {
    const { closedItem } = this.state;
    if (this.state.closedItem.includes(position)) {
      const i = closedItem.findIndex(el => el === position);
      closedItem.splice(i, 1);
    } else {
      closedItem.push(position);
    }
    this.setState({
      closedItem,
    });
  }

  /* istanbul ignore next */
  handleScroll() {
    const { scroll } = this;
    if (!scroll) {
      return;
    }
    const leftScroll = scroll.scrollLeft;

    requestAnimationFrame(() => {
      if (!this.elements) {
        this.elements = Array.from(document.querySelectorAll('.attribute'));
      }
      this.elements.forEach((container) => {
        if (window.innerWidth < 1440) {
          // eslint-disable-next-line no-param-reassign
          container.style.transform = leftScroll >= 15 ? `translateX(${leftScroll - 15}px)` : '';
        } else {
          // eslint-disable-next-line no-param-reassign
          container.style.transform = `translateX(${leftScroll}px)`;
        }
      });
    });
    this.manageContainer();
  }

  handleScrollChange() {
    const { itemContainer, trackHorizontal } = this;
    if (!itemContainer || !trackHorizontal) {
      return;
    }

    const positions = itemContainer.getBoundingClientRect();
    if (positions.bottom > 0) {
      const scrollTop = positions.bottom -
        positions.top;
      trackHorizontal.style.top = `${scrollTop}px`;
    } else {
      trackHorizontal.style.top = 'inherit';
    }
  }

  manageContainer() {
    const { items } = this.props;
    const { closedItem } = this.state;
    const outerContainer = document.querySelector('.outer');
    const scrollContainer = document.querySelector('.scroll');
    if (!outerContainer || !scrollContainer) {
      return;
    }
    const outerWidth = scrollContainer.scrollWidth;
    const closedItemQuantity = closedItem.length;
    if ((((items.length - closedItemQuantity) * (outerWidth > 815 ? outerWidth / 10 : 80)) +
      (closedItemQuantity * 40)) > outerWidth) {
      outerContainer.style.display = 'inline-block';
    } else {
      outerContainer.style.display = 'block';
    }
  }

  handleResize() {
    this.handleScrollChange();
    this.handleScroll();
  }

  render() {
    const { sheet: { classes }, items, ratings, parameters } = this.props;
    const { closedItem } = this.state;
    const market = 'Amazon.com';
    const containers = [...items].sort(compareItem).map((item, index) => (
      <Container
        key={item._id}
        getColumnWidth={getColumnWidth}
        closedItem={closedItem}
        position={index + 1}
        itemSlug={item.slug}
        image={item.images[0]}
        itemName={item.name[0].content}
        market={market}
        price={649}
        currency={'$'}
        rating={item.rating.map(el => el.score)
                 .reduce((prev, curr) => prev + curr) / item.rating.length}
        handleClosedItem={this.handleClosedItem}
        handleResize={this.handleResize}
      />
      ),
    );
    const tables = parameters.map((parameter, index) => (
      <div key={parameter.attributeGroup.id}>
        <Table
          closedItem={closedItem}
          parameters={parameter}
          tableIndex={index}
        />
      </div>));
    return (
      <div
        className={`scroll ${classes.container}`}
        ref={(container) => { this.container = container; }}
      >
        <Scrollbars
          style={{ width: '100%', height: '100%', maxHeight: 'none', minHeight: '1px' }}
          renderTrackHorizontal={props => <div {...props} className={classes.trackHorizontal} />}
          renderTrackVertical={props => <div {...props} className={classes.trackVertical} />}
          renderThumbHorizontal={props =>
            <div {...props} className={classes.thumbHorizontal} >
              <div className={classes.innerThumbHorizontal} />
            </div>}
          renderView={props => <div {...props} className={classes.trackView} style={{ maxHeight: 'none!important' }} />}
          universal
          autoHeight
        >
          <div
            className={`outer ${classes.outerContainer}`}
            style={items.length > 10 ? { display: 'inline-block' } : {}}
          >
            <div
              className={classes.itemContainer}
            >
              {containers}
            </div>
            <div className={classes.tableContainer}>
              <RatingTable
                closedItem={closedItem}
                scores={ratings}
              />
              {tables}
            </div>
          </div>
          <div className={classes.afterBlock} />
        </Scrollbars>
      </div>
    );
  }
}

export default injectSheet(styles)(List);
