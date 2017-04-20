import constants from '../../core/styles/constants';

const { middle, small } = constants;

export default {
  search: {
    position: 'relative',
    zIndex: 30,
  },

  searchInput: {
    display: 'none',
    justifyContent: 'center',
    height: 80,
    width: '100%',

    backgroundColor: '#ffffff',

    [`@media (max-width: ${middle}px)`]: {
      height: 60,
    },

    [`@media (max-width: ${small}px)`]: {
      height: 50,
    },
  },

  searchInputOpen: {
    display: 'flex',
  },

  searchList: {
    display: 'none',
    justifyContent: 'center',
    width: '100%',

    backgroundColor: '#ebebeb',
  },

  searchListOpen: {
    display: 'flex',
  },

  container: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',
    maxWidth: 1440,
    height: '100%',
    padding: '0 15px',
  },
};
