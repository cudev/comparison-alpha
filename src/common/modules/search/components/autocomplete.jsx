// @flow
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

import injectSheet from '../../../../client/jss-config';
import styles from '../styles/autocomplete';

type AutocompleteProps = {
  sheet: { classes: Object },
  items: Array<Object>,
  emphasize: String,
  showAutocomplete: Boolean,
  onSearchRequest: Function,
};

const createListItem = ({ text, count }, emphasize, classes, onSearchRequest) => {
  const emphasizeStart = text.toLowerCase().indexOf(emphasize.toLowerCase().trim());
  const emphasizeLength = emphasize.trim().length;
  let itemElement;

  if (emphasizeStart !== -1) {
    itemElement = (
      <Link
        to={`/search-result/${encodeURIComponent(text)}`}
        key={text}
        className={classes.item}
        onClick={() => { onSearchRequest(text); }}
      >
        <div className={classes.container}>
          <div>
            {text.slice(0, emphasizeStart)}
            <strong className={classes.bolded}>
              {text.substr(emphasizeStart, emphasizeLength)}
            </strong>
            {text.slice(emphasizeStart + emphasizeLength)}
          </div>
          <div className={classes.count}>{count}</div>
        </div>
      </Link>
    );
  }
  return itemElement;
};

export const Complete = ({
  sheet: { classes },
  items,
  emphasize,
  showAutocomplete,
  onSearchRequest,
}: AutocompleteProps) => (
  <div
    className={classNames(classes.list, {
      [classes.listActive]: emphasize.length && showAutocomplete,
    })}
  >
    {items.map(item => createListItem(item, emphasize, classes, onSearchRequest))}
  </div>
);

export default injectSheet(styles)(Complete);
