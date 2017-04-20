// @flow
import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import HeadTag from '../../core/components/head-tag/components/head-tag';

import injectSheet from '../../../../client/jss-config';
import Header from '../../core/components/header/components/header';
import data from '../../app/components/data';
import item from '../../item/';
import styles from '../styles/comparison';
import ComparisonList from '../../comparison-list';
import AdvertisementList from '../../advertisement-list';
import fetchData from '../../core/fetch-data';
import config from '../../../config';
import Loader from '../../loader';

const List = item.components.ListContainer;
const { normalizeRatings, normalizeValues, getEnglishContent } = fetchData;

type ComparisonProps = {
  sheet: { classes: Object },
  router: Object,
  params: { slug: string },
  comparison: Object | null,
  comparisons: Array<Object>,
  isFetchingData: String,
};

function getData() {
  return {
    ratings: data.ratings,
    parameters: data.parameters,
    values: data.values,
    advertisementData: [{
      index: 0,
      image: '/images/advertisement/1.png',
      company: 'company X',
    }],
  };
}

export class Comparison extends Component {
  state: {
    data: any,
  };
  constructor(props: ComparisonProps) {
    super(props);
    this.state = {
      data: getData(),
    };
  }
  componentWillReceiveProps(nextProps: Object) {
    if (nextProps.comparison === null) {
      nextProps.router.push('/not-found');
    }
  }

  render() {
    const { sheet: { classes }, comparison, comparisons, params: { slug } } = this.props;
    const { data: {
      advertisementData,
    } } = this.state;
    if (!comparison) {
      return (<Loader color={'187, 212, 44'} />);
    }

    return (
      <div>
        <HeadTag
          title={`title for ${getEnglishContent(comparison.title)}`}
          description={`description for ${slug}`}
          keywords={`custom keywords for ${slug}`}
          url={`http://${config.host}:3000/comparison/${slug}`}
        />
        <div className={classes.headerContainer}>
          <Header
            title={getEnglishContent(comparison.title)}
            date={1479859200000}
            views={148}
          />
        </div>
        <List
          items={comparison.items}
          parameters={normalizeValues(comparison.items)}
          ratings={normalizeRatings(comparison.items)}
        />
        <div className={classes.bottomContainer}>
          <div className={classes.title}>
            Related comparisons
          </div>
          <div className={classes.content}>
            <ComparisonList comparisonData={comparisons} />
            <AdvertisementList advertisementData={advertisementData} />
          </div>
        </div>
      </div>
    );
  }
}

const getComparison = gql`
  query getComparison($slug: String!) {
    comparisonSlug(slug: $slug) {
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
          source{
            title
            image
          }
        }
        values{
          attribute{
           id
            name {
              language
              content
            }
            attributeGroup{
              id
              name{
                language
                content
              }
            }
          }
          content{
            content
            language
          }
        }
      }
    }
  }
`;

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
    }
  }
`;

export default compose(
  graphql(getComparison, {
    options: ({ params }) => ({
      variables: { slug: params.slug },
    }),
    props: ({ data: { comparisonSlug } }) => ({
      comparison: comparisonSlug,
    }),
  }),
  graphql(getComparisons, {
    props: ({ data: { comparisons } }) => ({
      comparisons,
    }),
  }),
  injectSheet(styles),
)(Comparison);
