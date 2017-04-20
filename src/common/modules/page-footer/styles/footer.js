import constants from '../../core/styles/constants';

const { middle, small } = constants;

export default {
  footer: {
    alignSelf: 'flex-end',
    width: '100%',
  },
  heading: {
    position: 'relative',

    margin: '0 0 40px 0',
    padding: '20px 0 20px',

    color: '#fff',
    fontFamily: 'Prompt',
    fontSize: 24,
    fontWeight: 400,
    lineHeight: 1.67,

    '&::before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,

      width: 100,
      height: 1,

      backgroundColor: '#808080',
    },

    [`@media (max-width: ${middle}px)`]: {
      margin: '0 0 30px 0',
      padding: '15px 0 15px',

      fontSize: 20,
    },

    [`@media (max-width: ${small}px)`]: {
      margin: '0 0 20px 0',
      padding: '10px 0 10px',
    },
  },

  menu: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',

    backgroundColor: '#10233b',
  },

  policy: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',

    backgroundColor: '#091421',
  },

  container: {
    display: 'flex',
    boxSizing: 'border-box',
    maxWidth: 1440,
    padding: '0 15px 0',
    width: '100%',
  },

  containerColumn: {
    [`@media (max-width: ${small}px)`]: {
      flexDirection: 'column',
    },
  },

  containerCenter: {
    justifyContent: 'center',
  },

  company: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '50%',
  },

  contactUs: {
    width: '50%',
  },

  navList: {
    margin: 0,
    padding: '0 0 40px',

    listStyle: 'none',

    [`@media (max-width: ${middle}px)`]: {
      paddingBottom: '30px',
    },

    [`@media (max-width: ${small}px)`]: {
      paddingBottom: '20px',
    },
  },

  navItem: {
    color: '#999',
    fontFamily: 'Prompt',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 2.5,

    cursor: 'pointer',
    '-webkit-tap-highlight-color': 'transparent',

    '&:hover': {
      color: '#fff',
    },

    [`@media (max-width: ${middle}px)`]: {
      fontSize: 14,
    },
  },

  socialList: {
    display: 'flex',
    margin: 0,
    padding: '0 0 40px',

    listStyle: 'none',

    [`@media (max-width: ${middle}px)`]: {
      paddingBottom: '30px',
    },

    [`@media (max-width: ${small}px)`]: {
      paddingBottom: '20px',
    },
  },

  socialItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 40,

    cursor: 'pointer',
    '-webkit-tap-highlight-color': 'transparent',

    '&:last-child': {
      marginRight: 0,
    },

    '&:hover svg': {
      fill: '#fff',
    },
  },

  copy: {
    color: '#999',
    fontFamily: 'Prompt',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 2.5,

    [`@media (max-width: ${middle}px)`]: {
      fontSize: 14,
    },
  },
};
