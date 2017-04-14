import constants from '../../core/styles/constants';

export default {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  tabs: {
    display: 'flex',
    backgroundColor: '#d9d9d9',
    zIndex: 10,
    '@media (max-width: 325px)': {
      marginLeft: '-2px',
    },
  },
  title: {
    display: 'flex',
    position: 'relative',
    alignItems: 'baseline',
    backgroundColor: 'inherit',
    lineHeight: '1.2',
    border: 'none',
    padding: '15px 15px 20px 20px',
    cursor: 'pointer',
    color: '#4d4d4d',
    fontFamily: constants.fontFamily,
    fontSize: '24px',
    fontWeight: '400',
    '&:first-child': {
      marginRight: '10px',
    },
    '&:hover': {
      backgroundColor: 'rgba(230,230,230,0.5)',
    },
    '&:hover $overlay': {
      display: 'block',
    },
    '&:focus': {
      outline: 'none',
    },
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '20px',
      padding: '10px 10px 15px 15px',
      '&:first-child': {
        marginRight: '5px',
      },
    },
    [`@media (max-width: ${constants.small}px)`]: {
      padding: '5px 5px 10px 10px',
    },
  },
  overlay: {
    display: 'none',
    position: 'absolute',
    backgroundColor: '#a7ba3a',
    top: 0,
    left: 0,
    width: '100%',
    height: '2px',
    zIndex: '10',
  },
  activeOverlay: {
    backgroundColor: '#10233b',
    display: 'block',
  },
  activeTab: {
    backgroundColor: '#e6e6e6',
    '&:hover': {
      backgroundColor: '#e6e6e6',
    },
  },
  resultQuantity: {
    height: '24px',
    width: '24px',
    marginLeft: '5px',
    textAlign: 'center',
    lineHeight: '24px',
    position: 'relative',

    '&::before': {
      content: '""',
      backgroundImage: 'url(/images/bg.png)',
      opacity: '0.1',
      zIndex: '1',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 0',
      '-ms-background-size': 'cover',
      '-o-background-size': 'cover',
      '-moz-background-size': 'cover',
      '-webkit-background-size': 'cover',
      backgroundSize: 'cover',
      position: 'absolute',
      left: '0',
      top: '0',
      width: '100%',
      height: '100%',
    },
    [`@media (max-width: ${constants.middle}px)`]: {
      height: '20px',
      width: '20px',
      lineHeight: '20px',
    },
  },
  amount: {
    fontSize: '18px',
    opacity: 1,
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '16px',
    },
  },
  active: {
    backgroundColor: '#e6e6e6',
    border: 'none',
    borderTop: '2px solid #10233b',
    '&:hover': {
      backgroundColor: '#e6e6e6',
      borderTop: '2px solid #10233b',
      opacity: 1,
    },
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 0',
    [`@media (max-width: ${constants.middle}px)`]: {
      padding: '15px 0',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      padding: '10px 0',
      flexDirection: 'column',
    },
  },
  innerContent: {
    width: '100%',
  },
  contentNotFound: {
    padding: '30px 0 0',
  },
  titleTop: {
    padding: '80px 0 0',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    color: 'grey',
    fontFamily: constants.fontFamily,
    fontSize: '30px',
    fontWeight: '300',
    lineHeight: 1.2,
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '26px',
      padding: '30px 0 15px',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      padding: '20px 0 10px',
    },
  },
  hidden: {
    display: 'none',
  },
};
