// @flow
import React, { Component } from 'react';
import classNames from 'classnames';

import injectSheet from '../../../../client/jss-config';
import AdvertisementList from '../../advertisement-list';
import SearchResultSection from '../../search-result-page/components/search-result-section';
import styles from '../styles/search-result';
import NotFound from '../../not-found';

type SearchResultProps = {
  sheet: { classes: Object },
  setSelectedTab: Object,
  result: Object,
  children: Array<Object>,
  advertisementData: Array<Object>,
  searchString: string,
};

export class SearchResult extends Component {
  state: {
    selectedTab: string,
  };

  constructor(props: SearchResultProps) {
    super(props);
    this.state = {
      selectedTab: `${props.children[0].props.name}-${props.children[0].props.total}`,
    };
    (this:any).handleTabChange = this.handleTabChange.bind(this);
    const error = props.children.some(child => child.type !== SearchResultSection);
    if (error) {
      throw new TypeError('Search-Result component children should be of type "Search-Result-Section".');
    }
  }

  componentWillReceiveProps(nextProps: SearchResultProps) {
    this.setState({
      selectedTab: `${nextProps.children[0].props.name}-${nextProps.children[0].props.total}`,
    });
  }

  handleTabChange(index: string) {
    this.setState({
      selectedTab: index,
    });
  }

  render() {
    const { sheet: { classes },
      advertisementData,
      children,
      searchString,
    } = this.props;
    const { selectedTab } = this.state;
    return (
      <div className={classes.container}>
        <div className={classes.tabs}>
          {
            children.map((child) => {
              const key = `${child.props.name}-${child.props.total}`;
              return (
                <button
                  key={`${key}-notFound`}
                  className={classNames(
                    classes.title,
                    { [classes.activeTab]: selectedTab === key },
                  )}
                  onClick={() => this.handleTabChange(key)}
                >
                  <div
                    className={classNames(classes.overlay,
                      { [classes.activeOverlay]: selectedTab === key },
                    )}
                  />
                  <div>{child.props.name}</div>
                  <div className={classes.resultQuantity}>
                    <div className={classes.amount}>
                      <span>{child.props.total}</span>
                    </div>
                  </div>
                </button>
              );
            })
          }
        </div>
        {
          searchString ? (
            <div className={classes.contentNotFound}>
              {
                children.map((child) => {
                  const key = `${child.props.name}-${child.props.total}`;
                  return (
                    <div
                      key={key}
                      className={classNames({ [classes.hidden]: selectedTab !== key })}
                    >
                      <NotFound
                        title="Sorry..."
                        text={`We couldn't find any ${child.props.name.toLowerCase()} that match "${searchString}"`}
                        button={false}
                      />
                      <div className={classes.titleTop}>Top {child.props.name.toLowerCase()}</div>
                    </div>
                  );
                })
              }
            </div>
          ) : null
        }
        <div className={classes.content}>
          {
            children.map((child) => {
              const key = `${child.props.name}-${child.props.total}`;
              return (
                <div
                  key={key}
                  className={classNames(
                    classes.innerContent,
                    { [classes.hidden]: selectedTab !== key })}
                >
                  {child}
                </div>
              );
            })
          }
          <AdvertisementList advertisementData={advertisementData} />
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(SearchResult);
