import constants from '../../../styles/constants';

export default {
  header: {
    justifyContent: 'center',
    width: '100%',
    lineHeight: '1.2',
  },
  container: {
    flexGrow: 1,
  },

  top: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 20,

    backgroundColor: '#fff',
    borderBottom: '1px solid #e6e6e6',

    [`@media (max-width: ${constants.middle}px)`]: {
      padding: 15,
    },

    [`@media (max-width: ${constants.small}px)`]: {
      padding: '10px 10px 0 10px',
      flexDirection: 'column',
    },
  },

  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    padding: 20,
    flexWrap: 'wrap',

    backgroundColor: '#fff',

    [`@media (max-width: ${constants.middle}px)`]: {
      padding: 15,
    },

    [`@media (max-width: ${constants.small}px)`]: {
      padding: 10,
    },
  },


  heading: {
    alignSelf: 'center',
    margin: 0,

    color: '#333',
    fontFamily: 'Prompt',
    fontSize: 28,
    fontWeight: 400,
    maxWidth: 'calc(100vw - 280px)',

    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: 24,
      maxWidth: 'calc(100vw - 220px)',
    },

    [`@media (max-width: ${constants.small}px)`]: {
      alignSelf: 'stretch',
      maxWidth: 'calc(100vw - 50px)',
    },
  },

  list: {
    alignSelf: 'flex-start',
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    padding: '0 0 0 40px',

    listStyle: 'none',

    [`@media (max-width: ${constants.middle}px)`]: {
      paddingLeft: 30,
    },

    [`@media (max-width: ${constants.small}px)`]: {
      alignSelf: 'flex-end',
    },
  },

  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    marginRight: 10,

    cursor: 'pointer',
    '-webkit-tap-highlight-color': 'transparent',

    '&:last-child': {
      marginRight: 0,
    },

    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },

    '&:active': {
      backgroundColor: 'rgba(0, 0, 0, 0.15)',
    },

    [`@media (max-width: ${constants.middle}px)`]: {
      marginRight: 5,
    },
  },

  link: {
    display: 'flex',
    alignItems: 'center',
  },

  info: {
    display: 'flex',

    '&:last-child': {
      padding: '0 0 0 40px',
    },

    [`@media (max-width: ${constants.middle}px)`]: {
      '&:last-child': {
        paddingLeft: 30,
      },
    },

    [`@media (max-width: ${constants.small}px)`]: {
      '&:first-child': {
        paddingRight: 20,
      },

      '&:last-child': {
        paddingLeft: 0,
      },
    },
  },

  property: {
    paddingRight: 20,

    color: '#999',
    fontFamily: 'Prompt',
    fontSize: 16,
    fontWeight: 400,

    [`@media (max-width: ${constants.middle}px)`]: {
      paddingRight: 15,
    },
  },

  value: {
    display: 'flex',
    alignItems: 'center',

    color: '#666',
    fontFamily: 'Prompt',
    fontSize: 16,
    fontWeight: 600,
    textTransform: 'uppercase',

    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: 14,
    },
  },
};
