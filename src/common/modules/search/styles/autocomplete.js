import constants from '../../core/styles/constants';

const { middle, small } = constants;

export default {
  list: {
    width: '100%',
    margin: 0,
    padding: 0,
    display: 'none',
  },

  listActive: {
    display: 'block',
  },

  item: {
    display: 'flex',
    justifyContent: 'center',
    height: 40,

    color: '#666',
    fontFamily: 'Prompt',
    fontSize: 20,
    fontWeight: 300,

    cursor: 'pointer',
    userSelect: 'none',
    textDecoration: 'none',
    '-webkit-tap-highlight-color': 'transparent',

    '&:hover': {
      backgroundColor: '#dadada',
    },

    [`@media (max-width: ${middle}px)`]: {
      fontSize: 18,
    },

    [`@media (max-width: ${small}px)`]: {
      fontSize: 16,
    },
  },

  container: {
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 1440,
    padding: '0 15px',
    width: '100%',
    alignContent: 'space-between',
  },

  bolded: {
    fontWeight: 600,
  },

  count: {
    color: '#808080',
    fontFamily: 'Prompt',
    fontSize: 20,
    fontWeight: 100,

    [`@media (max-width: ${middle}px)`]: {
      fontSize: 18,
    },

    [`@media (max-width: ${small}px)`]: {
      fontSize: 16,
    },
  },
};
