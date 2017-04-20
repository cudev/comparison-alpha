import constants from '../../core/styles/constants';

export default {
  headerContainer: {
    margin: '0 auto',
    padding: '0 15px',
    'max-width': '1440px',
    boxSizing: 'border-box',
  },
  bottomContainer: {
    margin: '0 auto',
    padding: '0 15px',
    maxWidth: '1440px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    display: 'flex',
    [`@media (max-width: ${constants.small}px)`]: {
      flexDirection: 'column',
    },
  },
  title: {
    padding: '40px 0 20px',
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
  trackHorizontal: {
    position: 'absolute',
    height: '36px!important',
    right: '2px',
    bottom: '2px',
    left: '2px',
    borderRadius: '3px',
  },
  thumbHorizontal: {
    position: 'relative',
    height: '100%',
    cursor: 'pointer',
    borderRadius: 'inherit',
    padding: ' 15px 0',
    boxSizing: 'border-box',
  },
  innerThumbHorizontal: {
    width: '100%',
    height: '6px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  trackVertical: {
    display: 'none',
  },
};
