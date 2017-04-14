import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import pageFooter from '../../../src/common/modules/page-footer/';

const Footer = pageFooter.components.Footer;

const ratings = [
  {
    score: 8.5,
    source: {
      image: 'http://lorempixel.com/640/480',
      title: 'Title',
    },
  },
];

test('footer contains heading', (t) => {
  const wrapper = shallow(<Footer ratings={ratings} />).first().shallow();

  t.true(wrapper.html().includes('Contact'));
});
