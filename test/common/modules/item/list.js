import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import List from '../../../../src/common/modules/item/components/list';
import Container from '../../../../src/common/modules/item/components/container';

const items = [
  {
    _id: '5898356d183bc90fbd253765',
    images: ['http://lorempixel.com/640/480'],
    name: [{ content: 'fdgdfd', language: 'en' }],
    rating: [{
      score: 8.5,
      source: {
        image: 'http://lorempixel.com/640/480',
        title: 'http://ahmed.info',
      },
    }],
    slug: '"Polarised_JSON_Intelligent_Granite_Car"',
    values: [
      {
        attribute: {
          attributeGroup: {
            id: '5898356d183bc90fbd253633',
            name: [
              {
                content: 'fgfg',
                language: 'en',
              },
            ],
          },
          id: 'dfgrfthtyj654848',
          name: [
            {
              content: 'fgfg',
              language: 'en',
            },
          ],
        },
        content: [
          {
            content: 'fgfg',
            language: 'en',
          },
        ],
      },
    ],
  },
  {
    _id: '5898356dsafsd183bc90fbd253765',
    images: ['http://lorempixel.com/640/480'],
    name: [{ content: 'fdgdfd', language: 'en' }],
    rating: [{
      score: 8.5,
      source: {
        image: 'http://lorempixel.com/640/480',
        title: 'http://ahmed.info',
      },
    }],
    slug: '"Polarised_JSON_Intelligent_Granite_Car"',
    values: [
      {
        attribute: {
          attributeGroup: {
            id: '5898356d183bc90fbd253633',
            name: [
              {
                content: 'fgfg',
                language: 'en',
              },
            ],
          },
          id: 'dfgrfthtyj654848',
          name: [
            {
              content: 'fgfg',
              language: 'en',
            },
          ],
        },
        content: [
          {
            content: 'fgfg',
            language: 'en',
          },
        ],
      },
    ],
  },
];

const parameters = [
  {
    attributeGroup: {
      id: 'fgbhfgbhgf546',
      name: 'Design',
    },
    attributes: [{
      id: 'dfgdfbhsdfh',
      name: 'fdgbfdssf',
      content: [
        {
          content: 'dfgdfgdf',
          index: 0,
        },
      ],
    }],
  },
];
const ratings = [
  {
    index: 0,
    scores: [
      {
        index: 0,
        score: 5.8,
      },
    ],
    source: {
      image: 'http://lorempixel.com/640/480',
      title: 'http://ahmed.info',
    },
  },
];

const element = (<List
  items={items}
  ratings={ratings}
  parameters={parameters}
/>);

test('render List component, check quantity of renedered elements', (t) => {
  const wrapper = shallow(element).first().shallow();
  t.is(wrapper.find(Container).length, items.length);
});

