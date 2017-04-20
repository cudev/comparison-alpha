import React from 'react';
import PropTypes from 'prop-types';

import { getIdFromVideoString } from '../api';

export const urlMap = new Map([
  ['youtube', 'http://www.youtube.com/embed/'],
  ['vimeo', 'http://player.vimeo.com/video/'],
]);

const VideoPlayer = ({ service, video, ...htmlTags }) => (
  <iframe
    src={`${urlMap.get(service)}${getIdFromVideoString(video)}`}
    frameBorder="0"
    allowFullScreen
    {...htmlTags}
  />
  );


VideoPlayer.propTypes = {
  service: PropTypes.oneOf(['youtube', 'vimeo']).isRequired,
  video: PropTypes.string.isRequired,
};

export default VideoPlayer;
