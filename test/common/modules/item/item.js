import React from 'react';
import test from 'ava';
import { mount } from 'enzyme';
import jsdom from 'jsdom';

import Item from '../../../../src/common/modules/item/components/item';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

const elementWithWindowProps = (
  <Item
    columnWidth={150}
    isOpened
    isFetchingColumnWidth={false}
    position={3}
    image={'/images/item.png'}
    itemName={'Samsung Galaxy 7'}
    market={'Amazon'}
    price={199.99}
    currency={'$'}
    rating={9.2}
    ratingScores={[8.2, 8.7, 6.9, 9.5, 9.4]}
    window={{}}
  />);


test('Resize window without window', (t) => {
  t.notThrows(() => mount(elementWithWindowProps), TypeError);
});

test('Resize window', (t) => {
  let handleScroll = false;
  const elementWithDocumentProps = (
    <Item
      isOpened
      position={3}
      image={'/images/item.png'}
      itemName={'Samsung Galaxy 7'}
      market={'Amazon'}
      price={199.99}
      currency={'$'}
      rating={9.2}
      ratingScores={[8.2, 8.7, 6.9, 9.5, 9.4]}
      document={{ querySelectorAll: () => [{ style: { minWidth: '0px' } }] }}
      handleResize={() => { handleScroll = true; }}
      getColumnWidth={() => 10}
    />
  );

  mount(elementWithDocumentProps);
  const event = global.document.createEvent('Event');
  event.initEvent('resize', true, true);
  window.dispatchEvent(event);
  window.dispatchEvent(event);
  t.is(handleScroll, true);
});

