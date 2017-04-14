import constants from '../../core/styles/constants';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '80px',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'transparent',
    width: '100%',
  },
  containerClosed: {
    minWidth: '40px',
    width: '40px',
    overflow: 'hidden',
    boxSizing: 'border-box',

  },
  itemContainer: {
    marginBottom: '36px',
    width: '100%',
  },
  circle: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',

    padding: '15px 10px',
    marginBottom: '1px',
    backgroundColor: '#fff',

    [`@media (max-width: ${constants.middle}px)`]: {
      padding: '10px 5px',
    },
  },
  info: {
    marginBottom: '10px',
  },
  title: {
    marginTop: '10px',
    padding: '0 10px',
    width: '100%',
    boxSizing: 'border-box',
    position: 'relative',

    fontFamily: constants.fontFamily,
    fontSize: '20px',
    fontWeight: '400',
    height: '40px',
    backgroundColor: '#fff',
    color: '#808080',
    lineHeight: '40px',

    marginBottom: '1px',
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '18px',
      padding: '0 5px',
    },
  },
  titleText: {
    whiteSpace: 'nowrap',
    lineHeight: '40px',
    position: 'absolute',
    zIndex: '5',
  },
  ratingCell: {
    position: 'relative',
    width: '100%',

    color: '#1a1a1a',
    fontFamily: constants.fontFamily,
    fontSize: '10px',
    fontWeight: '300',

    backgroundColor: '#fff',
  },
  score: {
    color: '#666',
    fontSize: '24px',
  },
  siteImage: {
    position: 'absolute',
  },
  resourceName: {
    zIndex: '5',
    position: 'absolute',
    whiteSpace: 'nowrap',
    display: 'block',
  },
  overlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    height: '100%',
    width: '5px',
    backgroundColor: '#b3b3b3',
    opacity: '0.5',
    zIndex: '10',
  },
  ratingContainer: {
    width: '100%',
  },
  settingContainer: {
    width: '100%',
  },

};

export default styles;
