import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import Table from '../../../../src/common/modules/rating/components/table';

const scores = [
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

test('render certain amount of rows', (t) => {
  const element = <Table scores={scores} closedItem={[]} />;
  const wrapper = shallow(element).first().shallow();
  const renderedBlock = wrapper.find(`.${shallow(element).props('sheet').sheet.classes.tableRow}`);
  t.is(scores[0].scores.length, renderedBlock.length);
});
