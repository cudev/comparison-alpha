// @flow
import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import injectSheet from '../../../../client/jss-config';
import ComparisonList from '../../comparison-list';
import AdvertisementList from '../../advertisement-list';
import ItemCardContainer from '../../item-card-container';
import Header from '../../core/components/header/components/header';
import styles from '../styles/home';
import fetchData from '../../core/fetch-data';

const { getEnglishContent } = fetchData;
function getData() {
  return {
    advertisementData: (Array.from(new Array(4))).map((element, index) => ({
      index,
      image: `/images/advertisement/${index + 1}.png`,
      company: 'company X',
    })),
  };
}

type HomeProps = {
  sheet: { classes: Object },
  router: Object,
  comparisons: Array<Object>,
};

export class Home extends Component {
  state: {
    data: any,
  };
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      data: getData(),
    };
  }

  render() {
    const { sheet: { classes }, comparisons } = this.props;
    const { data: { advertisementData } } = this.state;
    if (!this.props.comparisons) {
      return (<div>Preloader</div>);
    }

    const [main, ...rest] = comparisons;

    return (
      <div className={classes.outerWrapper}>
        <div className={classes.itemContainer}>
          <div className={classes.headerContainer}>
            <Header title={getEnglishContent(comparisons[0].title)} />
          </div>
          <div className={classes.itemWrapper}>
            <ItemCardContainer comparisonSlug={main.slug} items={main.items} />
          </div>
        </div>

        <div className={classes.bottomContainer}>
          <div className={classes.title} >
            Related comparisons
          </div>
          <div className={classes.content}>
            <ComparisonList comparisonData={rest} />
            <AdvertisementList advertisementData={advertisementData} />
          </div>
        </div>
      </div>
    );
  }
}

const getComparisons = gql`
  query getComparisons {
    comparisons {
      _id
      slug
      image
      title {
        language
        content
      }
      items {
        _id
        slug
        name {
          language
          content
        }
        images
        rating {
          score
        }
      }
    }
  }
`;

export default compose(
  graphql(getComparisons, {
    props: ({ data: { comparisons } }) => ({
      comparisons,
    }),
  }),
  injectSheet(styles),
)(Home);
