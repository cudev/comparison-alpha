import constants from '../../core/styles/constants';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 10px 20px',
    width: '100%',
    boxSizing: 'border-box',

    backgroundColor: '#fff',
    [`@media (max-width: ${constants.middle}px)`]: {
      padding: '0 5px 15px',
    },
  },
  market: {
    fontFamily: constants.fontFamily,
    fontSize: '10px',
    fontWeight: '300',
    color: '#b3b3b3',
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '9px',
    },

  },
  price: {
    paddingBottom: '15px',

    fontFamily: constants.fontFamily,
    fontWeight: '300',
    textTransform: 'uppercase',
    color: '#1a1a1a',

    [`@media (max-width: ${constants.middle}px)`]: {
      paddingBottom: '10px',
      fontSize: '14px',
    },
  },
  whole: {
    fontSize: '16px',
  },
  fractional: {
    fontSize: '8px',
    verticalAlign: '5px',
  },
  button: {
    textAlign: 'center',
    padding: '8px 0',
    maxWidth: '86px',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#bbd42c',
    textDecoration: 'none',
    outline: 'none',
    border: 'none',

    cursor: 'pointer',

    color: '#fff',
    fontFamily: constants.fontFamily,
    fontSize: '16px',
    fontWeight: '600',
    textTransform: 'uppercase',

    '&:hover': {
      backgroundColor: '#a7ba3a',
    },
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '14px',
    },
    '& a': {
      textDecoration: 'none',
      color: '#fff',
    },
  },
};

export default styles;
