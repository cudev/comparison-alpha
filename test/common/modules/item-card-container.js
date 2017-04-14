import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import ItemCardContainer from '../../../src/common/modules/item-card-container';

const items = Array.from(new Array(10)).map((element, index) => ({
  index,
  _id: `${index}123`,
  images: { 0: 'images/item.png' },
  name: [{ content: 'Best camera phones of 2016', language: 'en' }],
  market: 'Amazon',
  price: 699.1,
  currency: '$',
  rating: [{ score: 9.7 }, { score: 2.7 }],
}));

const element = (<ItemCardContainer items={items} />);

test('render certain amount of item cards', (t) => {
  const wrapper = shallow(element).first().shallow();
  const cardLength = wrapper.html().match(/Best camera phones of 2016/ig).length;
  t.is(cardLength, items.length);
});