import React from 'react';
import classNames from 'classnames';

import injectSheet from '../../../../client/jss-config';
import Ellipsis from '../../../../common/ellipsis';
import styles from '../styles/table';

type ParameterProps = {
  sheet: { classes: Object },
  closedItem: Array<Object>,
  tableIndex: number,
  parameters: Object
};

const Container = ({
  sheet: { classes },
  parameters,
  closedItem,
  tableIndex,
}: ParameterProps) => {
  const rows = parameters.attributes.map((value, valueIndex) => {
    const cells = (value.content.map((content, contentIndex) => {
      const overlayStyle = closedItem.includes(contentIndex + 1) ? {} : { display: 'none' };
      const textStyle = contentIndex === 0 ? { color: '#1a1a1a' } : {};
      return (
        <div
          key={content.index}
          className={classNames(
              { [classes.firstCell]: valueIndex === 0 },
               { [classes.firstTable]: valueIndex === 0 && tableIndex === 0 },
              { [classes.lastCell]: valueIndex === parameters.length - 1 },
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
              className={`textContainer-${(contentIndex + 1)} ${classes.textContainer}`}
            >
              <Ellipsis clamp={5}>
                <span
                  className={classes.text}
                  style={textStyle}
                >
                  {content.content}
                </span>
              </Ellipsis>
            </div>
          </div>
        </div>
      );
    }));
    return (
      <div
        key={value.id} className={classes.tableRow}
      >
        <div
          className={classes.topOverlay}
          style={valueIndex === 0 ? { top: `${tableIndex === 0 ? '80px' : '35px'}` } : {}}
        />
        {
          valueIndex === 0 ?
            <div
              className={`attribute ${classNames(classes.fixed,
            { [classes.titleFixed]: valueIndex === 0 },
            { [classes.titleFirstTable]: valueIndex === 0 && tableIndex === 0 },
            )}`}
            >
              {parameters.attributeGroup.name}
            </div> : null
        }

        <div
          className={`attribute ${classNames(
              classes.fixed,
              { [classes.firstFixed]: valueIndex === 0 },
              { [classes.fixedFirstTable]: valueIndex === 0 && tableIndex === 0 },
              )
            }`}
        >
          {parameters.attributes[valueIndex].name}
        </div>
        {cells}
      </div>
    );
  });
  return (
    <div className={classes.table}>
      {rows}
    </div>
  );
};

export default injectSheet(styles)(Container);
