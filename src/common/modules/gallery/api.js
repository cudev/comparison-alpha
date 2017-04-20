import qs from 'query-string';

const url = [
  {
    service: 'youtube',
    preview: ['http://img.youtube.com/vi/', 'id', '/0.jpg'],
    video: 'http://www.youtube.com/embed/',
  },
  {
    service: 'vimeo',
    preview: ['http://i.vimeocdn.com/video/', 'id', '.jpg'],
    video: 'http://player.vimeo.com/video/',
  },
];

const getPreviewSrc = (service, id) => {
  const { preview } = url.find(element => element.service === service);
  const result = preview.slice();
  const index = preview.findIndex(element => element === 'id');
  result.splice(index, 1, id);
  return result.join('');
};

const getIdFromVideoString = (videoString) => {
  const urlArr = videoString.split('/');
  const idString = urlArr[urlArr.length - 1];
  const queryParams = qs.extract(videoString);
  return (queryParams && qs.parse(queryParams).v) || idString || '';
};

export { getPreviewSrc, getIdFromVideoString, url };
