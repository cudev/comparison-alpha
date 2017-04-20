import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import Gallery from '../../../../src/common/modules/gallery/components/gallery';

const items = [];

for (let i = 0; i < 10; i += 1) {
  items.push({ src: `/images/items/image-${i}.jpg`, title: 'Iphone 6', type: 'image' });
}

items.push({
  src: 'https://www.youtube.com/embed/bXTC3YNxIEM',
  type: 'video',
  service: 'youtube',
});

const element = (<Gallery items={items} />);

test('render certain amount of items', (t) => {
  const wrapper = shallow(element).first().shallow();
  const renderedImages = wrapper.find(`.${shallow(element).props('sheet').sheet.classes.item}`);
  t.is(renderedImages.length, items.length);
});

test('change selectedMedia in state when click on items', (t) => {
  const wrapper = shallow(element).first().shallow();
  const item = wrapper.find(`.${shallow(element).props('sheet').sheet.classes.outerOverlay}`).first();
  const stateBeforeClick = wrapper.state('selectedMedia');
  item.simulate('click');
  const stateAfterClick = wrapper.state('selectedMedia');
  t.true(stateBeforeClick !== stateAfterClick);
});

test('change state when dispatch switchOnDraggableState', (t) => {
  const wrapper = shallow(element).first().shallow();
  const stateBeforeDispatch = wrapper.state('draggable');
  wrapper.instance().switchOnDraggableState();
  const stateAfterDispatch = wrapper.state('draggable');
  t.true(stateBeforeDispatch !== stateAfterDispatch);
});

test('change state when dispatch switchOffDraggableState', (t) => {
  const wrapper = shallow(element).first().shallow();
  wrapper.instance().switchOnDraggableState();
  const stateBeforeDispatch = wrapper.state('draggable');
  wrapper.instance().switchOffDraggableState();
  const stateAfterDispatch = wrapper.state('draggable');
  t.true(stateBeforeDispatch !== stateAfterDispatch);
});
