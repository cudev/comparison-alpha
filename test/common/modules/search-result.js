import React from 'react';
import test from 'ava';
import { shallow, mount } from 'enzyme';
import jsdom from 'jsdom';

import SearchResult from '../../../src/common/modules/search-result';
import SearchResultSection from '../../../src/common/modules/search-result-page/components/search-result-section';
import ComparisonList from '../../../src/common/modules/comparison-list';
import data from '../../../src/common/modules/app/components/data';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

const items = data.items;
const comparisonData = (Array.from(new Array(6))).map((element, index) => ({
  index,
  posted: Date.now(),
  views: 32,
  title: 'Best camera phones of 2016',
  image: 'images/comparisonCard/1.png',
  place: 3,
}));
const advertisementData = (Array.from(new Array(2))).map((element, index) => ({
  index,
  image: 'images/advertisement/1.png',
  company: 'company X',
}));

const productData = data.items;
const comparisons = (<SearchResultSection
  name="Comparisons"
  total={comparisonData.length}
>
  <div>Comparisons</div>
</SearchResultSection>);

const products = (<SearchResultSection
  name="Products"
  total={productData.length}
>
  <div>Products</div>
</SearchResultSection>);
const fakeChild = (
  <ComparisonList
    comparisonData={comparisonData}
  />
);

const element = (<SearchResult
  advertisementData={advertisementData}>
  {comparisons}
  {products}
  </SearchResult>);

const elementWithFakeChildren = (<SearchResult
  advertisementData={advertisementData}>
  {comparisons}
  {fakeChild}
</SearchResult>);

test('change state when click on tab', (t) => {
  const wrapper = shallow(element).first().shallow();
  wrapper.find(`.${shallow(element).props('sheet').sheet.classes.title}`)
    .first().simulate('click');
  t.is(wrapper.state().selectedTab, 'Comparisons-6');
});

test('render component with children with wrong type', (t) => {
  t.throws(() => mount(elementWithFakeChildren), TypeError);
});
