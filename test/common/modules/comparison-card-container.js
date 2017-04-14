import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import ComparisonCardContainer from '../../../src/common/modules/comparison-card-container';

const comparisonData = (Array.from(new Array(2))).map((element, index) => ({
  index,
  posted: new Date(),
  views: 32,
  title: [{ content: 'Best camera phones of 2016', language: 'en' }],
  image: 'images/comparisonCard/1.png',
}));
const advertisementData = (Array.from(new Array(3))).map((element, index) => ({
  index,
  image: 'images/advertisement/1.png',
  company: 'company X',
}));

const element = (<ComparisonCardContainer
  comparisonData={comparisonData}
  advertisementData={advertisementData}
/>);

test('render certain amount of comparison cards', (t) => {
  const wrapper = shallow(element);
  const cardLength = wrapper.html().match(/Best camera phones of 2016/ig).length;
  t.is(cardLength, comparisonData.length);
});


test('render certain amount of advertisements cards', (t) => {
  const wrapper = shallow(element);
  const advertisementLength = wrapper.html().match(/company X/ig).length;
  t.is(advertisementLength, advertisementData.length);
});
