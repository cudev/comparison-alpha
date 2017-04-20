// @flow
import React, { Component } from 'react';
import classNames from 'classnames';

import injectSheet from '../../../../client/jss-config';
import styles from '../styles/search-input';

type SearchInputProps = {
  sheet: { classes: Object },
  resultsCount: Number,
  onInputChange: Function,
  searchQuery: String,
  onSearchRequest: Function
};

class SearchInput extends Component {
  state: {
    showPlaceholder: boolean,
  };

  constructor(props: SearchInputProps) {
    super(props);

    this.state = {
      showPlaceholder: true,
    };

    (this:any).handleInputToggle = this.handleInputToggle.bind(this);
    (this:any).handleInputChange = this.handleInputChange.bind(this);
    (this:any).handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleInputChange(event) {
    this.props.onInputChange(event.target.value);
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.onSearchRequest(event.target.value);
    }
  }

  handleInputToggle() {
    this.setState(({ showPlaceholder }, { searchQuery }) => ({
      showPlaceholder: searchQuery ? showPlaceholder : !showPlaceholder,
    }));
  }

  render() {
    const { sheet: { classes }, resultsCount, searchQuery } = this.props;
    const { showPlaceholder } = this.state;

    return (
      <div className={classes.search}>
        <input
          className={classes.input}
          onFocus={this.handleInputToggle}
          onBlur={this.handleInputToggle}
          onInput={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
          value={searchQuery}
        />
        <div
          className={classNames(classes.placeholder, {
            [classes.placeholderDisabled]: !showPlaceholder,
          })}
        >
          Type text here...
        </div>
        <div className={classes.count}>{resultsCount} results</div>
        <i
          className={`icon ion-search ${classNames(classes.icon, {
            [classes.iconActive]: !showPlaceholder,
          })}`}
        />
      </div>
    );
  }
}

export default injectSheet(styles)(SearchInput);
