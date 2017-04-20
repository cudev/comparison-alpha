// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import { Scrollbars } from 'react-custom-scrollbars';

import injectSheet from '../../../../client/jss-config';
import styles from '../styles/gallery';
import VideoPlayer from './video-player';
import { getPreviewSrc, getIdFromVideoString } from '../api';

type GalleryProps = { sheet: { classes: Object }, items: Array<Object> };

class Gallery extends Component {
  state: {
    selectedMedia: number,
    draggable: boolean,
  };

  scroll: ?HTMLElement;
  image: ?HTMLElement;

  constructor(props: GalleryProps) {
    super(props);

    this.state = {
      selectedMedia: 0,
      draggable: false,
    };

    (this:any).handleMediaSelect = this.handleMediaSelect.bind(this);
    (this:any).handleArrowClick = this.handleArrowClick.bind(this);
    (this:any).renderArrows = this.renderArrows.bind(this);
    (this:any).switchOnDraggableState = this.switchOnDraggableState.bind(this);
    (this:any).switchOffDraggableState = this.switchOffDraggableState.bind(this);
    (this:any).handleDragScroll = this.handleDragScroll.bind(this);
  }

  componentDidMount() {
    const { sheet: { classes } } = this.props;
    const scroll = document.querySelector(`.${classes.mediaWrapper} + div > div`);
    this.image = document.querySelector(`.${classes.item}`);

    if (!scroll) {
      throw new Error();
    }
    scroll.addEventListener('mousedown', this.switchOnDraggableState);
    scroll.addEventListener('mouseup', this.switchOffDraggableState);
    scroll.addEventListener('mouseleave', this.switchOffDraggableState);
    scroll.addEventListener('mousemove', this.handleDragScroll);
    this.scroll = scroll;
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

  handleMediaSelect(item) {
    this.setState({ selectedMedia: item });
  }

  handleArrowClick(selectedMedia) {
    if (!this.scroll) {
      throw new Error('it is impossible to find element with following selector .mediaWrapper + div > div');
    }
    if (!this.image) {
      throw new Error('it is impossible to find element with following selector .item');
    }
    const beginShown = this.scroll.scrollLeft;
    const endShown = beginShown + this.scroll.clientWidth;
    if (this.state.selectedMedia < selectedMedia) {
      const mustBeShown = (selectedMedia + 1) * (this.image.clientWidth + 10);
      if (mustBeShown > endShown || mustBeShown < beginShown) {
        this.scroll.scrollLeft = this.scroll.scrollLeft + (mustBeShown - endShown);
      }
      if (mustBeShown < this.scroll.clientWidth) {
        this.scroll.scrollLeft = 0;
      }
    } else {
      const mustBeShown = selectedMedia * (this.image.clientWidth + 10);

      if (mustBeShown > endShown || mustBeShown < beginShown) {
        this.scroll.scrollLeft = mustBeShown;
      }
    }
    this.setState({
      selectedMedia,
    });
  }

  renderArrows() {
    const { selectedMedia } = this.state;
    const { sheet: { classes }, items } = this.props;
    const rightHidden = selectedMedia + 1 === items.length;
    const leftHidden = selectedMedia === 0;

    return (
      <div>
        <button
          onClick={() => { this.handleArrowClick(selectedMedia + 1); }}
          className={classNames(classes.button, classes.buttonRight)}
          style={rightHidden ? { display: 'none' } : {}}
        >
          <i
            className={classNames('ion-ios-arrow-right', classes.arrow, classes.rightArrow)}
          />
        </button>
        <button
          onClick={() => { this.handleArrowClick(selectedMedia - 1); }}
          className={classNames(classes.button, classes.buttonLeft)}
          style={leftHidden ? { display: 'none' } : {}}
        >
          <i
            className={classNames('ion-ios-arrow-left', classes.arrow, classes.leftArrow)}
          />
        </button>
      </div>
    );
  }

  render() {
    const { sheet: { classes }, items } = this.props;
    const { selectedMedia } = this.state;
    const {
        src,
        title,
        type,
        service,
      } = items[selectedMedia];
    return (
      <section className={classes.gallery}>
        <div className={classes.mediaWrapper}>
          {
            type === 'image'
              ? <img
                className={classes.media}
                src={src}
                alt={title}
              />
              : <VideoPlayer service={service} video={src} />
          }
          {
            type !== 'video' && this.renderArrows()
          }
        </div>
        <Scrollbars
          className={classes.scrollbars}
          style={{ width: '100%' }}
          renderTrackHorizontal={props => <div {...props} className={classes.trackHorizontal} />}
          renderTrackVertical={props => <div {...props} className={classes.trackVertical} />}
          renderThumbHorizontal={props =>
            <div {...props} className={classes.thumbHorizontal} >
              <div className={classes.innerThumbHorizontal} />
            </div>}
          autoHeight
          universal
        >
          <div className={classes.previewWrapper}>
            <div className={classes.preview}>
              {items.map((item, index) => (
                <button
                  key={item.index}
                  type="button"
                  onClick={() => { this.handleMediaSelect(index); }}
                  className={classNames(classes.item,
                  { [classes.outerOverlay]: index !== selectedMedia },
                  { [classes.innerOverlay]: index === selectedMedia })}
                >
                  <img
                    src={item.type === 'image' ? item.src : getPreviewSrc(item.service, getIdFromVideoString(item.src))}
                    alt={item.title}
                    className={classes.image}
                  />
                  <i
                    className={classNames('icon', classes.mediaType, {
                      'ion-ios-videocam': item.type === 'video',
                      'ion-image': item.type === 'image',
                    })}
                  />
                </button>
                ))
              }
            </div>
          </div>
        </Scrollbars>
      </section>
    );
  }
}

export default injectSheet(styles)(Gallery);
