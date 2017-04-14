import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import Header from '../../../src/common/modules/core/components/header/components/header';

test('header contains title', (t) => {
  const wrapper = shallow(<Header title="Top Smartphones of 2016" />).first().shallow();

  t.true(wrapper.html().includes('Top Smartphones of 2016'));
});

test('header contains date in right format', (t) => {
  const date = 1479859200000;
  const expectedDate = 'November 23, 2016';
  const wrapper = shallow(<Header title="Top Smartphones of 2016" date={date} views={148} />).first().shallow();

  t.true(wrapper.html().includes(expectedDate));
});

test('header contains views in right format', (t) => {
  const date = 1479859200000;
  const wrapper = shallow(<Header title="Top Smartphones of 2016" date={date} views={148} />).first().shallow();

  t.true(wrapper.html().includes('148'));
  wrapper.setProps({ views: 4000 });
  t.true(wrapper.html().includes('4k'));
});
