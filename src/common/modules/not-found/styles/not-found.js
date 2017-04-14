import constants from '../../core/styles/constants';

export default {
  container: {
    display: 'flex',
    maxWidth: '1410px',
    padding: '40px 15px',
    margin: 'auto',

    [`@media (max-width: ${constants.small}px)`]: {
      position: 'inherit',
    },

  },
  innerContainer: {
    display: 'flex',
    width: '100%',
    [`@media (max-width: ${constants.small}px)`]: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
    },
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '40px',
    width: '30%',
    maxWidth: '350px',
    '& img': {
      width: '100%',
      height: 'auto',
    },
    [`@media (max-width: ${constants.middle}px)`]: {
      width: '40%',
      marginRight: '30px',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      margin: '0 0 10px',
      width: '100%',
    },
  },
  content: {
    color: '#4d4d4d',
    fontFamily: constants.fontFamily,
    fontWeight: '400',
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [`@media (max-width: ${constants.middle}px)`]: {
      width: '60%',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      width: '100%',
    },
  },
  button: {
    display: 'inline-flex;',
    textDecoration: 'none',
    verticalAlign: 'text-bottom',
    padding: '0 20px',
    backgroundColor: '#bbd42c',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontFamily: 'Prompt',
    height: '40px',
    textTransform: 'uppercase',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '16px',
    [`@media (max-width: ${constants.middle}px)`]: {
      padding: '0 15px',
      fontSize: '14px',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      padding: '0 10px',
    },
  },
  textButtonContainer: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: '56px',
    lineHeight: '1.2',
    marginBottom: '20px',
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '48px',
      marginBottom: '15px',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      marginBottom: '10px',
    },
  },
  text: {
    maxWidth: '740px',
    fontSize: '32px',
    lineHeight: '1.3',
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '28px',
    },
  },
  textSearch: {
    maxWidth: '710px',
    fontSize: '32px',
    lineHeight: '1.3',
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '28px',
    },
  },
};
