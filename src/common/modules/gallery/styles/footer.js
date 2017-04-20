import constants from '../../core/styles/constants';

export default {
  title: {
    backgroundColor: '#fff',
    marginBottom: '1px',

    color: 'grey',
    fontFamily: 'Prompt',
    fontSize: '20px',
    fontWeight: '400',
    padding: '15px 0 10px 20px',
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '18px',
      padding: '10px 0 5px 15px',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      padding: '5px 0 5px 10px',
    },
  },
  ratingContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    background: '#fff',
  },
  rating: {
    display: 'flex',
    backgroundColor: '#fff',
    position: 'relative',
    flexBasis: '16.66%',
    minWidth: '155px',
    paddingBottom: '15px',
    '@media (max-width: 1410px)': {
      flexBasis: '20%',
    },
    [`@media (max-width: ${constants.middle}px)`]: {
      paddingBottom: '10px',
    },
    '@media (max-width: 805px)': {
      flexBasis: '25%',
    },
    '@media (max-width: 650px)': {
      flexBasis: '33.33%',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      paddingBottom: '5px',
    },
    '@media (max-width: 495px)': {
      flexBasis: '50%',
    },
    '@media (max-width: 340px)': {
      flexBasis: '100%',
    },
  },
  overlay: {
    width: '5px',
    height: '100%',
    backgroundColor: '#b3b3b3',
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
  },
  innerOverlay: {
    width: '5px',
    height: '40px',
    backgroundColor: '#323232',
    position: 'absolute',
    zIndex: '10',
    top: '16px',
    bottom: '0',
    left: '0',

  },
  cite: {
    position: 'absolute',
    left: '10px',
    color: '#1a1a1a',
    fontFamily: 'Prompt',
    fontSize: '10px',
    fontWeight: '300',
    zIndex: '10',
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '9px',
    },
  },
  rightBar: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px 12px 4px 45px',
    [`@media (max-width: ${constants.middle}px)`]: {
      padding: '16px 10px 12px 45px',
    },
  },
  leftBar: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    position: 'relative',
    display: 'flex',
    marginTop: '16px',
    marginBottom: '10px',
  },
  ratingData: {
    fontFamily: 'Prompt',
    fontWeight: '300',
    color: '#666',
    fontSize: '24px',
    marginLeft: '10px',

    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '20px',
      marginLeft: '5px',
    },
  },
  ratingWrapper: {
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    [`@media (max-width: ${constants.middle}px)`]: {
      width: '40px',
      height: '40px',
    },
  },
  fractional: {
    color: 'grey',
    fontSize: '12px',
  },
  footer: {
    userSelect: 'none',
  },
  sourceImage: {
    width: '40px',
    height: '40px',
    top: '16px',
    left: '0',
    position: 'absolute',
    marginLeft: '5px',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
};
