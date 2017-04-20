import { urlMap } from '../gallery/components/video-player';

function compareItem(itemA, itemB) {
  const ratingA = itemA.rating.map(el => el.score)
      .reduce((prev, curr) => prev + curr) / itemA.rating.length;
  const ratingB = itemB.rating.map(el => el.score)
      .reduce((prev, curr) => prev + curr) / itemB.rating.length;
  return ratingB - ratingA;
}

function getEnglishContent(source) {
  return source.find(element => element.language === 'en').content;
}

function normalizeRatings(items) {
  const result = [];
  items.map(item => item.rating)
    .forEach((rating, index) => {
      rating.forEach(({ source, score }, i) => {
        const sourceExists = result.some(element => element.source.title === source.title);
        if (!sourceExists) {
          result.push({ source, scores: [], index: i });
        }
        result.find(element => element.source.title === source.title).scores.push({ score, index });
      });
    });
  return result;
}

function normalizeValues(items) {
  const values = [];
  const parameters = [];
  items.map(item => item.values)
    .forEach((itemValues, index) => {
      itemValues.forEach((value) => {
        const valueExist = values.find(element => element.id === value.attribute.id);
        if (!valueExist) {
          values.push({
            id: value.attribute.id,
            value: [],
          });
        }
        values.find(element => element.id === value.attribute.id)
          .value.push({
            index,
            content: getEnglishContent(value.content),
          });

        const groupExists = parameters.find(element =>
          element.attributeGroup.name === getEnglishContent(value.attribute.attributeGroup.name));
        if (!groupExists) {
          parameters.push({
            attributeGroup: {
              id: value.attribute.attributeGroup.id,
              name: getEnglishContent(value.attribute.attributeGroup.name),
            },
            attributes: [],
          });
        }
        const parametersValues = parameters
          .find(element =>
            element.attributeGroup.name === getEnglishContent(value.attribute.attributeGroup.name))
            .attributes.find(element => element.id === value.attribute.id);
        if (!parametersValues) {
          parameters.find(element =>
          element.attributeGroup.name === getEnglishContent(value.attribute.attributeGroup.name))
            .attributes.push({ id: value.attribute.id, name: getEnglishContent(value.content) });
          parameters.forEach((parameter) => {
            parameter.attributes.forEach((el) => {
              // eslint-disable-next-line no-param-reassign
              el.content = values.find(element => el.id === element.id).value;
            });
          });
        }
      });
    });
  return parameters;
}

function getVideoService(video) {
  let service = '';
  urlMap.forEach((value, key) => {
    if (video.indexOf(key) !== -1) {
      service = key;
    }
  });
  return service;
}

function generateMediaData(images, videos, title) {
  const media = [];
  images.forEach((image, index) => media.push({
    index: `${image}-${index}`,
    src: image,
    type: 'image',
    title,
  }));
  videos.forEach((video, index) => media.push({
    index: `${video}-${index}`,
    src: video,
    type: 'video',
    service: getVideoService(video),
  }));
  return media;
}

function normalizeSpecifications(specifications) {
  const result = [];
  specifications.forEach((specification) => {
    const destination = result.find(r =>
    specification.attribute.attributeGroup.id === r.attributeGroup.id);
    if (!destination) {
      result.push({ attributeGroup: specification.attribute.attributeGroup,
        specifications: [specification],
      });
    } else {
      destination.specifications.push(specification);
    }
  });
  return result;
}

export default {
  compareItem,
  getEnglishContent,
  normalizeRatings,
  normalizeValues,
  generateMediaData,
  normalizeSpecifications,
};
