import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import Container from '../../../../src/common/modules/rating/components/container';

const scores = [9.2, 9.7, 8.9, 7.5, 9.4];
const rating = 7.5;

test('render container', (t) => {
  const element = <Container scores={scores} rating={rating} />;
  const wrapper = shallow(element).first().shallow();
  const renderedBlock = wrapper.find(`.${shallow(element).props('sheet').sheet.classes.container}`);
  t.true(renderedBlock.length === 1);
});
