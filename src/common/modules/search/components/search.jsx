// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router';

import injectSheet from '../../../../client/jss-config';
import SearchInput from './search-input';
import AutoComplete from './autocomplete';
import styles from '../styles/search';

type SearchProps = {
  sheet: { classes: Object },
  isOpen: Boolean,
  items: Array<Object>,
  onOverlayOpen: Function,
  onOverlayClose: Function,
  router: Object,
};

export class Search extends Component {
  state: {
    value: string,
    showAutocomplete: boolean,
  };

  constructor(props: SearchProps) {
    super(props);

    this.state = {
      value: '',
      showAutocomplete: true,
    };

    (this:any).handleInputChange = this.handleInputChange.bind(this);
    (this:any).handleSearchRequest = this.handleSearchRequest.bind(this);
  }

  handleSearchRequest(request: string) {
    const { onOverlayClose, router } = this.props;
    this.setState({ showAutocomplete: false, value: request });
    onOverlayClose();
    router.push(`/search-result/${encodeURIComponent(request)}`);
  }

  handleInputChange(inputText: string) {
    this.setState(value => ({
      value: value ? inputText : inputText.trim(),
      showAutocomplete: true,
    }));

    this.props.onOverlayOpen();
  }

  render() {
    const { sheet: { classes }, isOpen, items } = this.props;
    const { value, showAutocomplete } = this.state;
    return (
      <div className={classes.search}>
        <div
          className={classNames(classes.searchInput, {
            [classes.searchInputOpen]: isOpen,
          })}
        >
          <div className={classes.container}>
            <SearchInput
              onInputChange={this.handleInputChange}
              searchQuery={value}
              onSearchRequest={this.handleSearchRequest}
              resultsCount={items.map(({ count }) => count).reduce((a, b) => a + b)}
            />
          </div>
        </div>

        <div
          className={classNames(classes.searchList, {
            [classes.searchListOpen]: isOpen,
          })}
        >
          <AutoComplete
            items={items}
            emphasize={value}
            showAutocomplete={showAutocomplete}
            onSearchRequest={this.handleSearchRequest}
          />
        </div>
      </div>
    );
  }
}

export const searchInstance = injectSheet(styles)(Search);

export default withRouter(injectSheet(styles)(Search));
