import constants from '../../core/styles/constants';

const styles = {
  sourceContainer: {
    position: 'absolute',
    zIndex: '2',
    height: '100%',
  },
  source: {
    height: '66px',
    width: '100%',
    backgroundColor: 'transparent',
    color: '#1a1a1a',
    fontFamily: constants.fontFamily,
    fontSize: '10px',
    fontWeight: '300',
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '9px',
    },
  },
  sourceName: {
    zIndex: '1',
    position: 'absolute',
    whiteSpace: 'nowrap',
    display: 'block',
    paddingLeft: '10px',
  },
  sourceImage: {
    width: '40px',
    height: '40px',
    top: '16px',
    left: '0',
    position: 'absolute',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
  overlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    height: '100%',
    width: '5px',
    backgroundColor: '#b3b3b3',
  },
  innerOverlay: {
    top: '16px',
    position: 'absolute',
    left: '0',
    height: '40px',
    width: '5px',
    backgroundColor: '#333',
    zIndex: '2',

  },
};

export default styles;
