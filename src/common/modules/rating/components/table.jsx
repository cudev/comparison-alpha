import React from 'react';
import classNames from 'classnames';

import injectSheet from '../../../../client/jss-config';
import styles from '../styles/table';
import Parameters from './parameters';
import Ellipsis from '../../../../common/ellipsis';

type ParameterProps = {
  sheet: { classes: Object },
  scores: Array<number>,
  closedItem: Array<Object>
};

const Container = ({
  sheet: { classes },
  scores,
  closedItem,
}: ParameterProps) => {
  const rows = scores.map((rating, ratingIndex) => {
    const cells = (rating.scores.map((content, contentIndex) => {
      const overlayStyle = closedItem.includes(contentIndex + 1) ? {} : { display: 'none' };
      return (
        <div
          key={content.index}
          className={classNames(
              classes.cell,
              { [classes.cellClosed]: closedItem.includes(contentIndex + 1) },
              )
            }
        >
          <div
            className={classes.overlay}
            style={overlayStyle}
          />
          <div
            className={classes.centerFlex}
          >
            <div
              className={classNames(`textContainer-${(contentIndex + 1)}`, classes.textContainer, { [classes.firstCell]: contentIndex === 0 })}
            >
              <Ellipsis lines={5}>
                <span
                  className={classes.text}
                >
                  {content.score}
                </span>
              </Ellipsis>
            </div>
          </div>
        </div>
      );
    }));
    return (
      <div
        key={rating.index}
        className={classes.tableRow}
      >
        <div className={classes.topOverlay} />
        <Parameters
          source={scores[ratingIndex].source}
        />
        {cells}
      </div>
    );
  });
  return (
    <div className={classes.table}>
      {rows}
      <div className={classes.footer} />
    </div>
  );
};

export default injectSheet(styles)(Container);
