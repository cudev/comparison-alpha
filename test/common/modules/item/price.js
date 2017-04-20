import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import Price from '../../../../src/common/modules/item/components/price';

test('calculate whole and fractional price', (t) => {
  const price = 399;
  const currency = '$';
  const expectedWhole = Math.floor(price);
  const expectedFractional = (price - expectedWhole).toFixed(2).substr(2, 2) || '00';
  const element = <Price price={price} currency={currency} />;
  const wrapper = shallow(element).first().shallow();
  const renderedWhole = wrapper.find(`.${shallow(element).props('sheet').sheet.classes.whole}`).text();
  const renderedFractional = wrapper.find(`.${shallow(element).props('sheet').sheet.classes.fractional}`).text();
  t.is(renderedWhole, currency + expectedWhole);
  t.is(renderedFractional, `.${expectedFractional}`);
});
