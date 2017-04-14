// @flow
import React from 'react';

import injectSheet from '../../../../client/jss-config';
import styles from '../styles/search-result-section';

type SearchResultSectionProps = {
  sheet: { classes: Object },
  children: Array<Object>
};

const SearchResultSection = ({
  sheet: { classes },
  children,
}: SearchResultSectionProps) => (
  <div className={classes.searchResultContainer}>
    {children}
  </div>
  );

export default injectSheet(styles)(SearchResultSection);
