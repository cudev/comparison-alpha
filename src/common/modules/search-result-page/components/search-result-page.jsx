// @flow
import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import injectSheet from '../../../../client/jss-config';
import SearchResult from '../../search-result';
import SearchResultSection from './search-result-section';
import ComparisonList from '../../comparison-list';
import ItemList from '../../item-list';
import styles from '../styles/search-result-container';
import startData from '../../app/components/data';
import Loader from '../../loader';

const productData = startData.items.slice(0, 4);
const comparisonData = (Array.from(new Array(3))).map((element, index) => ({
  index,
  _id: index,
  posted: Date.now(),
  views: 32,
  title: [
    {
      content: 'Best camera phones of 2016',
      language: 'en',
    },
    {
      content: 'Best camera phones of 2016',
      language: 'ru',
    },
    {
      content: 'Best camera phones of 2016',
      language: 'fr',
    },
  ],
  image: '/images/comparisonCard/1.png',
  place: 3,
  comparisonSlug: `comparison${index + 1}`,
}));
const advertisementData = (Array.from(new Array(2))).map((element, index) => ({
  index,
  image: '/images/advertisement/1.png',
  company: 'company X',
}));

type SearchResultProps = {
  sheet: { classes: Object },
  router: Object,
  comparisonEdges: Array<Object>,
  itemEdges: Array<Object>,
  params: { searchResultSlug: string },
};

class Container extends Component {
  state: {
    isLoadingData: boolean,
  };
  constructor(props: SearchResultProps) {
    super(props);
    this.state = {
      isLoadingData: true,
    };
  }
  render() {
    const { sheet: { classes },
      comparisonEdges,
      itemEdges,
      params: { searchResultSlug } } = this.props;
    if (!comparisonEdges || !itemEdges) {
      return (<Loader color={'187, 212, 44'} />);
    }
    return (
      <div className={classes.container}>
        <SearchResult
          advertisementData={advertisementData}
          searchString={(!comparisonEdges.length || !itemEdges.length) ? searchResultSlug : null}
        >
          <SearchResultSection
            name="Comparisons"
            total={comparisonEdges.length}
          >
            <ComparisonList
              comparisonData={comparisonEdges.length ?
              comparisonEdges.map(connection => connection.node) : comparisonData}
            />
          </SearchResultSection>
          <SearchResultSection
            name="Products"
            total={itemEdges.length}
          >
            <ItemList
              itemData={itemEdges.length ?
              itemEdges.map(item => item.node) : productData}
            />
          </SearchResultSection>
        </SearchResult>
      </div>
    );
  }
}

const getItemConnection = gql`
  query getItemConnection($search: String!) {
    itemConnection(search: $search) {
      edges {
        node {
          slug
          images
          _id
          name {
            content
            language
          }
        }
      }
    }
  }
`;

const getComparisonConnection = gql`
  query getComparisonConnection($search: String!) {
    comparisonConnection(search: $search) {
      edges {
        node {
          _id
          image
          slug
          title {
            content
            language
          }
        }
      }
    }
  }
`;

export const componentWithStyles = injectSheet(styles)(Container);

export default compose(
  graphql(getItemConnection, {
    options: ({ params }) => ({
      variables: { search: params.searchResultSlug },
    }),
    props: ({ data }) => ({
      itemEdges: data.itemConnection ? data.itemConnection.edges : null,
    }),
  }),
  graphql(getComparisonConnection, {
    props: ({ data }) => ({
      comparisonEdges: data.comparisonConnection ? data.comparisonConnection.edges : null,
    }),
    options: ({ params }) => ({
      variables: { search: params.searchResultSlug },
    }),
  }),
  injectSheet(styles),
)(Container);
