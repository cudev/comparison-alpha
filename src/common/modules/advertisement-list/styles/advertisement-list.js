import constants from '../../core/styles/constants';

export default {
  advertisementContainer: {
    display: 'flex',
    flexDirection: 'column',
    [`@media (max-width: ${constants.small}px)`]: {
      display: 'inline-block',
      columnCount: 2,
      columnGap: 0,
      '-moz-column-count': 2,
      '-webkit-column-count': 2,
      '-moz-column-gap': 0,
      '-webkit-column-gap': 0,
      margin: '0 -5px',
      flexBasis: 'inherit',
    },
  },
  advertisementWrapper: {
    padding: '0 0 20px',

    [`@media (max-width: ${constants.middle}px)`]: {
      padding: '0 0 15px',
    },

    [`@media (max-width: ${constants.small}px)`]: {
      padding: '0 5px',
      boxSizing: 'border-box',
      width: '100%',
    },
  },
  advertisement: {
    width: '300px',
    verticalAlign: 'middle',

    [`@media (max-width: ${constants.middle}px)`]: {
      width: '240px',
    },

    [`@media (max-width: ${constants.small}px)`]: {
      width: '100%',
      height: 'auto',
      paddingBottom: '10px',
    },
  },
};
