import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import сomparisonCard from '../../../src/common/modules/comparison-card';

const ComparisonCard = сomparisonCard.components.ComparisonCard;

const image = '/images/comparisons/58934cb4f07b252eccae1711/http://lorempixel.com/640/480';
const date = 1479859200000;

const element = (<ComparisonCard
  postedDate={date}
  image={image}
  place={458}
  views={9000}
  title={[{ content: 'LoremIpsum', language: 'en' }]}
/>);

test('formats date properly', (t) => {
  const expectedPostingDate = 'November 23, 2016';
  const wrapper = shallow(element);
  t.true(wrapper.html().includes(expectedPostingDate));
});

test('formats views number properly', (t) => {
  const expectedViewsQuantity = '9k';
  const wrapper = shallow(element);
  t.true(wrapper.html().includes(expectedViewsQuantity));
});

test('renders cover', (t) => {
  const expected = 'http://lorempixel.com/640/480)';
  const wrapper = shallow(element);
  t.true(wrapper.html().includes(expected));
});

test('render certain place', (t) => {
  const wrapper = shallow(element);
  const text = wrapper.shallow().first().text();
  t.true(text.includes('458thin'));
});
