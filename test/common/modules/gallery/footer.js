import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import Footer from '../../../../src/common/modules/gallery/components/footer';

const ratings = [
  {
    score: 8.5,
    source: {
      image: 'http://lorempixel.com/640/480',
      title: 'Title',
    },
  },
];
const element = (<Footer ratings={ratings} />)

test('render certain ammount of external ratings', (t) => {
  const wrapper = shallow(element).first().shallow();
  const renderedRatings = wrapper.find(`.${shallow(element).props('sheet').sheet.classes.rating}`);
  t.is(renderedRatings.length, ratings.length);
});
