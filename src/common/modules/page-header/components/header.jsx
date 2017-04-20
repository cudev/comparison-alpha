// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import { IndexLink } from 'react-router';

import injectSheet from '../../../../client/jss-config';
import styles from '../styles/header';
import { searchInstance as Search } from '../../search/components/search';

type HeaderProps = {
  sheet: { classes: Object },
  items: Array<Object>,
  logoSrc: String,
  router: Object
};

class Header extends Component {
  state: {
    isSearchOpen: boolean,
    isDropdownOpen: boolean,
    isOverlayOpen: boolean,
  };

  constructor(props: HeaderProps) {
    super(props);

    this.state = {
      isSearchOpen: false,
      isDropdownOpen: false,
      isOverlayOpen: false,
    };

    (this:any).handleSearchOpen = this.handleSearchOpen.bind(this);
    (this:any).handleDropdownOpen = this.handleDropdownOpen.bind(this);
    (this:any).handleOverlayClick = this.handleOverlayClick.bind(this);
    (this:any).handleOverlayClose = this.handleOverlayClose.bind(this);
    (this:any).handleOverlayOpen = this.handleOverlayOpen.bind(this);
  }

  handleSearchOpen() {
    this.setState(({ isSearchOpen, isOverlayOpen }) => ({
      isDropdownOpen: false,
      isSearchOpen: !isSearchOpen,
      isOverlayOpen: isSearchOpen ? false : !isOverlayOpen,
    }));
  }

  handleDropdownOpen() {
    this.setState(({ isDropdownOpen, isOverlayOpen }) => ({
      isSearchOpen: false,
      isDropdownOpen: !isDropdownOpen,
      isOverlayOpen: !isOverlayOpen,
    }));
  }

  handleOverlayClick() {
    this.setState({
      isSearchOpen: false,
      isDropdownOpen: false,
      isOverlayOpen: false,
    });
  }

  handleOverlayOpen() {
    this.setState({ isOverlayOpen: true });
  }

  handleOverlayClose() {
    this.setState({ isOverlayOpen: false });
  }

  render() {
    const { sheet: { classes }, items, logoSrc, router } = this.props;
    const { isDropdownOpen, isSearchOpen, isOverlayOpen } = this.state;

    return (
      <header className={classes.header}>
        <div className={classes.pageMenu}>
          <div className={classes.container}>
            <IndexLink className={classes.link} to="/">
              <img className={classes.logo} src={logoSrc} width="133" height="40" alt="Logo" />
            </IndexLink>

            <nav className={classes.pageNav}>
              <ul className={classes.navList}>
                <li className={classes.navItem}>
                  <button type="button" className={classes.button} onClick={this.handleSearchOpen}>
                    <i className={`icon ion-search ${classes.searchIcon}`} />
                  </button>
                </li>
                {items.slice(0, 4).map(
                  item => <li key={item} className={classes.navItem}>{item}</li>,
                )}
                <li
                  className={classNames(classes.navItem, classes.navItemButton, {
                    [classes.navItemActive]: isDropdownOpen,
                  })}
                >
                  <button type="button" className={classes.buttonMore} onClick={this.handleDropdownOpen}>
                    <i className={`icon ion-ios-arrow-down ${classes.arrowDownIcon}`} />
                  </button>
                  <ul
                    className={classNames(classes.dropdown, {
                      [classes.dropdownActive]: isDropdownOpen,
                    })}
                  >
                    {items.map(
                      item => <li key={item} className={classes.dropdownItem}>{item}</li>,
                    )}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <Search
          router={router}
          isOpen={isSearchOpen}
          onOverlayOpen={this.handleOverlayOpen}
          onOverlayClose={this.handleOverlayClose}
          items={[
            { text: 'Google Chrome', count: 1263 },
            { text: 'Google Nexus 7', count: 21 },
            { text: 'Google Pixel', count: 9 },
            { text: 'Google Abrakadabra - Not Found', count: 0 },
          ]}
        />

        <button
          type="button"
          onClick={this.handleOverlayClick}
          className={classNames(classes.overlay, {
            [classes.overlaySearchOpen]: isSearchOpen && isOverlayOpen,
            [classes.overlayDropdownOpen]: isDropdownOpen,
          })}
        />
      </header>
    );
  }
}

export const componentWithStyles = injectSheet(styles)(Header);

export default injectSheet(styles)(Header);
