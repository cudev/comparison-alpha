// @flow
import React from 'react';

import injectSheet from '../../../../client/jss-config';
import styles from '../styles/specification';
import fetchData from '../../core/fetch-data';

const { normalizeSpecifications, getEnglishContent } = fetchData;

type SpecificationProps = {
  sheet: { classes: Object },
  specifications: Array<Object>,
};
const Container = ({
  sheet: { classes },
  specifications,
}: SpecificationProps) => {
  const tables = normalizeSpecifications(specifications).map((specification) => {
    const parameters = specification.specifications.map(parameter => (
      <div
        key={parameter.attribute.id}
        className={classes.tableRow}
      >
        <div className={classes.parameter}>
          {getEnglishContent(parameter.attribute.name)}
        </div>
        <div className={classes.value}>
          {getEnglishContent(parameter.content)}
        </div>
      </div>
      ));
    return (
      <div
        key={specification.attributeGroup.id}
        className={classes.table}
      >
        <div className={classes.header}>
          {getEnglishContent(specification.attributeGroup.name)}
        </div>
        <div className={classes.content}>
          {parameters}
        </div>
      </div>
    );
  });
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        Specifications
      </div>
      { tables }
    </div>
  );
};

export default injectSheet(styles)(Container);
