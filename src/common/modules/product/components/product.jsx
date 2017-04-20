// @flow
import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import HeadTag from '../../core/components/head-tag/components/head-tag';
import injectSheet from '../../../../client/jss-config';
import styles from '../styles/product';
import gallery from '../../gallery';
import Header from '../../core/components/header/components/header';
import ComparisonCardContainer from '../../comparison-card-container';
import Specifications from '../../specification';
import ItemList from '../../item-list';
import fetchData from '../../core/fetch-data';
import config from '../../../config';
import Loader from '../../loader';

const Gallery = gallery.components.Gallery;
const Sidebar = gallery.components.Sidebar;
const Footer = gallery.components.Footer;

const { getEnglishContent, generateMediaData } = fetchData;

function getData() {
  return {
    advertisementData: (Array.from(new Array(4))).map((element, index) => ({
      index,
      image: `/images/advertisement/${index + 1}.png`,
      company: 'company X',
    })),
    generalData: {
      rating: 9.2,
      position: 5,
      comparison: 'Compare10phones',
      producer: 'Apple',
      currency: '$',
      price: 649.00,
      marketLink: 'https://www.amazon.com/Apple-Unlocked-Smartphone-Certified-Refurbished/dp/B00YD549VE/ref=sr_1_1?ie=UTF8&qid=1485516248&sr=8-1&keywords=Apple+6',
      awards: [
        {
          name: '/images/awards/1.png',
          index: 0,
        },
        {
          name: '/images/awards/2.png',
          index: 1,
        },
        {
          name: '/images/awards/3.png',
          index: 2,
        },
        {
          name: '/images/awards/4.png',
          index: 3,
        },
      ],
    },
  };
}

type ProductProps = {
  sheet: { classes: Object },
  params: { slug: string },
  router: Object,
  item: Object | null,
  items: Array<Object>,
  comparisons: Array<Object>
};

export class Product extends Component {
  state: {
    data: any,
  };
  constructor(props: ProductProps) {
    super(props);
    this.state = {
      data: getData(),
    };
  }
  componentWillReceiveProps(nextProps: Object) {
    if (nextProps.item === null) {
      nextProps.router.push('/not-found');
    }
  }

  render() {
    const { sheet: { classes }, item, items, comparisons, params: { slug } } = this.props;
    if (!item) {
      return (<Loader color={'187, 212, 44'} />);
    }
    const { data: {
      advertisementData,
      generalData } } = this.state;
    const media = generateMediaData(item.images, item.videos, getEnglishContent(item.name));
    return (
      <div className={classes.product}>
        <HeadTag
          title={`title for ${getEnglishContent(item.name)}`}
          description={`description for ${slug}`}
          keywords={`custom keywords for ${slug}`}
          url={`http://${config.host}:3000/product/${slug}`}
        />
        <Header
          title={getEnglishContent(item.name)}
          date={1479859200000}
          views={148}
        />
        <div className={classes.container}>
          <div className={classes.galleryWrapper}>
            <div className={classes.gallery}>
              <Gallery items={media} />
            </div>
            <Sidebar
              rating={generalData.rating}
              position={generalData.position}
              comparison={generalData.comparison}
              awards={generalData.awards}
              producer={generalData.producer}
              currency={generalData.currency}
              price={generalData.price}
              marketLink={generalData.marketLink}
            />
          </div>
          <Footer ratings={item.rating} />
          <ComparisonCardContainer
            comparisonData={comparisons}
            advertisementData={advertisementData}
          >
            <Specifications specifications={item.values} />
          </ComparisonCardContainer>
        </div>
        <div className={classes.title}>
          Related products
        </div>
        <ItemList itemData={items.slice(0, 4)} />
      </div>
    );
  }
}

const getItem = gql`
  query itemSlug($slug: String!) {
    itemSlug(slug: $slug) {
    _id
    name{
      language
      content
    }
    values{
      content {
        language
        content
      }
      attribute{
        id
        name{
          content
          language
        }
        attributeGroup{
          id
          name{
            content
            language
          }
        }
      }
    }
    rating{
      score
      source{
        title
        image
      }
    }
    images
    videos
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

const getItems = gql `
  query getItems {
    items {
      _id
      images
      name{
        language
        content
      }
    }
  }
`;

export default compose(
  graphql(getItem, {
    options: ({ params }) => ({
      variables: { slug: params.slug },
    }),
    props: ({ data: { itemSlug } }) => ({
      item: itemSlug,
    }),
  }),
  graphql(getItems, {
    props: ({ data: { items } }) => ({
      items,
    }),
  }),
  graphql(getComparisons, {
    props: ({ data: { comparisons } }) => ({
      comparisons,
    }),
  }),
  injectSheet(styles),
)(Product);
