import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import ComparisonList from '../../../src/common/modules/comparison-list';

const comparisonData = (Array.from(new Array(2))).map((element, index) => ({
  index,
  posted: new Date(),
  views: 32,
  title: [{content: 'Best camera phones of 2016', language: 'en' }],
  image: 'images/comparisonCard/1.png',
}));

const element = (<ComparisonList
  comparisonData={comparisonData}
/>);

test('render certain amount of comparison cards', (t) => {
  const wrapper = shallow(element);
  const cardLength = wrapper.html().match(/Best camera phones of 2016/ig).length;
  t.is(cardLength, comparisonData.length);
});
