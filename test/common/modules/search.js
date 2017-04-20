import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import search from '../../../src/common/modules/search/';
import { searchInstance as Search } from '../../../src/common/modules/search/components/search';


const SearchInput = search.components.SearchInput;

const items = [
  { text: 'Google Chrome', count: 1263 },
  { text: 'Google Nexus 7', count: 21 },
  { text: 'Google Pixel', count: 9 },
  { text: 'Google Abrakadabra - Not Found', count: 0 },
];

test('search can change input value', (t) => {
  const wrapper = shallow(<Search
    isOpen={false}
    items={items}
    onOverlayOpen={f => f} />).first().shallow();

  t.is(wrapper.state('value'), '');
  wrapper.find(SearchInput).shallow().first().shallow()
    .find('input')
    .simulate('input', { target: { value: 'test' } });
  t.is(wrapper.state('value'), 'test');
});

test('search input trim spaces', (t) => {
  const wrapper = shallow(<Search
    isOpen={false}
    items={items}
    onOverlayOpen={f => f} />).first().shallow();

  wrapper.setState({ value: 'test' });
  wrapper.find(SearchInput).shallow().first().shallow()
    .find('input')
    .simulate('input', { target: { value: 'test test' } });
  t.is(wrapper.state('value'), 'test test');
});

test('focus search input', (t) => {
  const wrapper = shallow(<Search isOpen={false} items={items} />)
    .first()
    .shallow()
    .find(SearchInput)
    .shallow()
    .first()
    .shallow();

  t.true(wrapper.state('showPlaceholder'));
  wrapper.find('input').simulate('focus');
  t.false(wrapper.state('showPlaceholder'));
});

test('blur search input', (t) => {
  const wrapper = shallow(<Search isOpen={false} items={items} />)
    .first()
    .shallow()
    .find(SearchInput)
    .shallow()
    .first()
    .shallow();

  wrapper.setProps({ searchQuery: 'test' });
  wrapper.find('input').simulate('blur');
  t.true(wrapper.state('showPlaceholder'));
});
