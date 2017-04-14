import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import Parameters from '../../../../src/common/modules/rating/components/parameters';

const parameters = {
  name: 'toptenrewiews.com',
  image: 'images/review.png',
};

test('render parameters', (t) => {
  const element = <Parameters source={parameters} />;
  const wrapper = shallow(element).first().shallow();
  const renderedBlock = wrapper.find(`.${shallow(element).props('sheet').sheet.classes.source}`);
  t.is(1, renderedBlock.length);
});
