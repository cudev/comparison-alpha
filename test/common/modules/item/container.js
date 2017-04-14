import React from 'react';
import test from 'ava';
import { mount } from 'enzyme';
import jsdom from 'jsdom';

import { ContainerWithoutJSS as Container } from '../../../../src/common/modules/item/components/container';
import classes from '../../../../src/common/modules/item/styles/container';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

const item = {
  image: 'images/item.png',
  itemName: 'Samsung Galaxy 7S long long text',
  market: 'Amazon',
  price: 699.1,
  currency: '$',
  rating: 9.7,
  ratingScores: [8.2, 8.7, 6.9, 9.5, 9.4],
};
const querySelectorAll = () => [{
  style: {
    minWidth: '0px',
  },
  classList: {
    add: () => {},
    remove: () => {},
  },
}];

const querySelector = () => ({
  style: {
    minWidth: '0px',
  },
  classList: {
    add: () => {},
    remove: () => {},
  },
});

const elementWithDocumentProps = (
  <Container
    sheet={{ classes }}
    key={1}
    getColumnWidth={() => {}}
    closedItem={[2, 3]}
    position={4}
    image={item.image}
    itemName={item.itemName}
    market={item.market}
    price={item.price}
    currency={item.currency}
    rating={item.rating}
    ratingScores={item.ratingScores}
    handleClosedItem={() => {}}
    handleResize={() => {}}
    document={{ querySelectorAll }}
  />);

test('Dispatch handleBlockResize, close item', (t) => {
  const wrapper = mount(elementWithDocumentProps);
  const fakeEvent = { target: { parentNode: { parentNode: { querySelector } } } };
  wrapper.instance().handleBlockResize(fakeEvent);
  const event = global.document.createEvent('Event');
  event.initEvent('resize', true, true);
  window.dispatchEvent(event);
  t.is(wrapper.state('isOpened'), false);
});

test('Dispatch handleBlockResize, open item', (t) => {
  const wrapper = mount(elementWithDocumentProps);
  const fakeEvent = { target: { parentNode: { parentNode: { querySelector } } } };
  wrapper.find('.ion-eye-disabled').first().simulate('click');
  wrapper.instance().handleBlockResize(fakeEvent);
  const event = global.document.createEvent('Event');
  event.initEvent('resize', true, true);
  window.dispatchEvent(event);
  t.is(wrapper.state('isOpened'), true);
});
