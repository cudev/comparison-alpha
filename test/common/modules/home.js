import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import { Home } from '../../../src/common/modules/home/components/home';
import classes from '../../../src/common/modules/home/styles/home';
import ComparisonCardContainer from '../../../src/common/modules/comparison-card-container';
import ItemCardContainer from '../../../src/common/modules/item-card-container';
import Header from '../../../src/common/modules/core/components/header/components/header';

const comparisons = [{
  _id: '123456',
  image: 'http://lorempixel.com/640/480',
  name: [
    {
      content: 'Item',
      language: 'en',
    },
  ],
  title: [
    {
      content: 'Title',
      language: 'en',
    },
  ],
  slug: 'slug_123',
  items: [
    {
      _id: '123456',
      images: ['http://lorempixel.com/640/480'],
      name: [
        {
          content: 'Item',
          language: 'en',
        },
      ],
      rating: [
        {
          score: '8.5',
          source: {
            image: 'http://lorempixel.com/640/480',
            title: 'rating',
          },
        },
      ],
      values: [{
        attribute: {
          attributeGroup: {
            id: '456',
            name: [
              {
                content: 'Attribute group',
                language: 'en',
              },
            ],
          },
          id: '123',
          name: [
            {
              content: 'Attribute',
              language: 'en',
            },
          ],
        },
        content: [
          {
            content: 'Specification',
            language: 'en',
          },
        ],
      }],
      slug: 'item_789',
    },
  ],
}];

const element = (<Home
  comparisons={comparisons}
  sheet={{ classes }}
/>);

test('render component with all embedded components', (t) => {
  const wrapper = shallow(element);
  t.is(wrapper.find(ItemCardContainer).length, 1);
  t.is(wrapper.find(Header).length, 1);
});
