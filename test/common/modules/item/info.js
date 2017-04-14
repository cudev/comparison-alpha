import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import jsdom from 'jsdom';

import Info from '../../../../src/common/modules/item/components/info';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

test('renders image', (t) => {
  const image = 'images/item.png';
  const wrapper = shallow(<Info image={image} position={1} />);
  t.true(wrapper.html().includes(image));
});

test('renders item name', (t) => {
  const expected = 'Samsung Galaxy 7';
  const wrapper = shallow(<Info itemName={expected} />);
  t.true(wrapper.html().includes(expected));
});

test('render item without award sign', (t) => {
  const position = 4;
  const expected = `images/position${position}`;
  const wrapper = shallow(<Info position={position} />);
  t.false(wrapper.html().includes(expected));
});
