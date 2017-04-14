import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import VideoPlayer from '../../../../src/common/modules/gallery/components/video-player';

const element = (<VideoPlayer service='youtube' video='https://www.youtube.com/embed/bXTC3YNxIEM' />)

test('render video player', (t) => {
  const wrapper = shallow(element).first().shallow();
  const iframe = wrapper.find('iframe');
  t.is(iframe.length, 1);
});
