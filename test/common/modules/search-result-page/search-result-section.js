import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import SearchResultSection from '../../../../src/common/modules/search-result-page/components/search-result-section';

const children = (Array.from(new Array(3))).map((element, index) => (<span>{index}</span>))

test('component renders children', (t) => {
  const wrapper = shallow(<SearchResultSection>{children}</SearchResultSection>).first().shallow();
  const renderedChildren = wrapper.find('span');
  t.is(renderedChildren.length, children.length);
});
