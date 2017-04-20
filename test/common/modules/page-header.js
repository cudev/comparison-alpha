import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import pageHeader from '../../../src/common/modules/page-header/';

const Header = pageHeader.components.Header;
const items = [
  'Top of 2016', 'Top camera', 'Top Android', 'Top Windows', 'Top prepaid',
  'Best Verizon Wireless phones of 2016', 'Best AT&T phones',
  'Best U.S. Cellular phones of 2016', 'Best T-Mobile phones of 2016',
];

test('open search bar on click', (t) => {
  const element = (<Header items={items} />);
  const wrapper = shallow(element).first().shallow();

  t.false(wrapper.state('isSearchOpen'));
  wrapper.find(`.${shallow(element).props('sheet').sheet.classes.button}`).simulate('click');
  t.true(wrapper.state('isSearchOpen'));
});

test('open dropdown on click', (t) => {
  const element = (<Header items={items} />);
  const wrapper = shallow(element).first().shallow();

  t.false(wrapper.state('isDropdownOpen'));
  wrapper.find(`.${shallow(element).props('sheet').sheet.classes.buttonMore}`).simulate('click');
  t.true(wrapper.state('isDropdownOpen'));
});

test('close search on overlay click', (t) => {
  const element = (<Header items={items} />);
  const wrapper = shallow(element).first().shallow();
  const classes = shallow(element).props('sheet').sheet.classes;

  t.false(wrapper.state('isSearchOpen'));
  wrapper.find(`.${classes.button}`).simulate('click');
  t.true(wrapper.state('isSearchOpen'));
  wrapper.find(`.${classes.overlay}`).simulate('click');
  t.false(wrapper.state('isSearchOpen'));
});
