import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import ItemList from '../../../src/common/modules/item-list';
import Info from '../../../src/common/modules/item/components/info';

const itemData = [{
  _id: '123',
  name: [
    {
      language: 'en',
      content: 'Item name',
    },
  ],
  images: ['http://lorempixel.com/640/480'],
}];

const element = (<ItemList
  itemData={itemData}
/>);

test('render certain amount of item cards', (t) => {
  const wrapper = shallow(element).first().shallow();
  const cardQuantity = wrapper.find(Info).length;
  t.is(itemData.length, cardQuantity);
});
