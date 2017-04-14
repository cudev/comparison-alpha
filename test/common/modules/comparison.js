import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import { Comparison } from '../../../src/common/modules/comparison/components/comparison';
import classes from '../../../src/common/modules/comparison/styles/comparison';
import Header from '../../../src/common/modules/core/components/header/components/header';
import ComparisonList from '../../../src/common/modules/comparison-list/components/comparison-list';
import AdvertisementList from '../../../src/common/modules/advertisement-list/components/advertisement-list';

const comparison = {
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
};

const comparisons = [
  {
    _id: '789',
    image: 'http://lorempixel.com/640/480',
    slug: 'Comparison_789',
    title: [
      {
        content: 'Comparison',
        language: 'en',
      },
    ],
  },
];

const element = (<Comparison
  comparison={comparison}
  comparisons={comparisons}
  sheet={{ classes }}
/>);

test('render component with all embedded components', (t) => {
  const wrapper = shallow(element);
  t.is(wrapper.find(Header).length, 1);
  t.is(wrapper.find(ComparisonList).length, 1);
  t.is(wrapper.find(AdvertisementList).length, 1);
});
