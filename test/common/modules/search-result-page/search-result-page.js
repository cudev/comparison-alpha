import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import SearchResult from '../../../../src/common/modules/search-result';
import SearchResultPage from '../../../../src/common/modules/search-result-page/components/search-result-page';
import data from '../../../../src/common/modules/app/components/data';

const stateData = {
  productData: data.items,
  comparisonData: (Array.from(new Array(6))).map((element, index) => ({
    index,
    posted: Date.now(),
    views: 32,
    title: 'Best camera phones of 2016',
    image: '/images/comparisonCard/1.png',
    place: 3,
    comparisonSlug: `comparison${index + 1}`,
  })),
  advertisementData: (Array.from(new Array(2))).map((element, index) => ({
    index,
    image: '/images/advertisement/1.png',
    company: 'company X',
  })),
};

test('change state and render component', (t) => {
  const wrapper = shallow(<SearchResultPage />).first().shallow();
  wrapper.setState({ data: stateData });
  wrapper.setState({ isLoadingData: false });
  const renderedSearchResult = wrapper.find(SearchResult);
  t.is(renderedSearchResult.length, 1);
});
