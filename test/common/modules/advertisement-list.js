import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import AdvertisementList from '../../../src/common/modules/advertisement-list';

const advertisementData = (Array.from(new Array(2))).map((element, index) => ({
  index,
  image: 'images/advertisement/1.png',
  company: 'company X',
}));

const element = (<AdvertisementList
  advertisementData={advertisementData}
/>);

test('render certain amount of advertisements', (t) => {
  const wrapper = shallow(element).first().shallow();
  const advertisementQuantity = wrapper.find(`.${shallow(element).props('sheet').sheet.classes.advertisement}`).length;
  t.is(advertisementData.length, advertisementQuantity);
});
