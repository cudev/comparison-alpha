import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import Sidebar from '../../../../src/common/modules/gallery/components/sidebar';

const awards = [
  {
    name: 'images/awards/1.png',
    index: 0,
  },
  {
    name: 'images/awards/2.png',
    index: 1,
  },
  {
    name: 'images/awards/3.png',
    index: 2,
  },
  {
    name: 'images/awards/4.png',
    index: 3,
  },
];
const element = (<Sidebar
  rating={9.2}
  position={5}
  comparison={'Compare10phones'}
  awards={awards}
  producer={'Apple'}
  currency={'$'}
  price={649.00}
/>);

test('render certain ammount of awards', (t) => {
  const wrapper = shallow(element).first().shallow();
  const renderedAwards = wrapper.find(`.${shallow(element).props('sheet').sheet.classes.award}`);
  t.is(renderedAwards.length, awards.length);
});

test('render certain comparison name', (t) => {
  const wrapper = shallow(element).first().shallow();
  t.true(wrapper.text().includes('Compare10phones'));
});
