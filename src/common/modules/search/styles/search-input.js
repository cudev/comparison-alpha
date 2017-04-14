import constants from '../../core/styles/constants';

const { middle, small } = constants;

export default {
  search: {
    position: 'relative',

    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',

    backgroundColor: '#fff',
  },

  input: {
    height: '100%',
    width: '100%',
    margin: 0,
    padding: 0,

    color: '#1a1a1a',
    fontFamily: 'Prompt',
    fontSize: 32,
    fontWeight: 300,
    lineHeight: 1.56,

    border: 'none',
    outline: 'none',

    [`@media (max-width: ${middle}px)`]: {
      fontSize: 28,
    },

    [`@media (max-width: ${small}px)`]: {
      fontSize: 20,
    },
  },

  placeholder: {
    position: 'absolute',
    top: 0,
    left: 0,

    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',

    color: '#b3b3b3',
    fontFamily: 'Libre Franklin',
    fontSize: 32,
    fontWeight: 300,
    lineHeight: 1.67,

    pointerEvents: 'none',

    [`@media (max-width: ${middle}px)`]: {
      fontSize: 28,
    },

    [`@media (max-width: ${small}px)`]: {
      fontSize: 20,
    },
  },

  placeholderDisabled: {
    display: 'none',
  },

  icon: {
    padding: '0 20px',

    color: '#b3b3b3',
    fontSize: 36,

    [`@media (max-width: ${middle}px)`]: {
      padding: '0 15px',

      fontSize: 32,
    },

    [`@media (max-width: ${small}px)`]: {
      padding: '0 10px',
    },
  },

  iconActive: {
    color: '#1a1a1a',
  },

  count: {
    flexShrink: 0,
    margin: '0 20px',

    color: '#808080',
    fontFamily: 'Prompt',
    fontSize: 32,
    fontWeight: 100,
    lineHeight: 1.56,

    userSelect: 'none',

    [`@media (max-width: ${middle}px)`]: {
      margin: '0 15px',

      fontSize: 28,
    },

    [`@media (max-width: ${small}px)`]: {
      fontSize: 20,
    },
  },
};
