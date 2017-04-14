import constants from '../../core/styles/constants';

export default {
  product: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    overflow: 'hidden',
    margin: '0 auto',
    padding: '0 15px',
    maxWidth: '1440px',
    boxSizing: 'border-box',
  },

  container: {
    flexGrow: 1,
    width: '100%',
    boxSizing: 'border-box',
    position: 'relative',
    backgroundColor: 'rgba(243,243,243,0.5)',
  },

  galleryWrapper: {
    display: 'flex',
    margin: '10px 0 20px',

    [`@media (max-width: ${constants.small}px)`]: {
      flexDirection: 'column',
    },
  },

  gallery: {
    width: '60%',
    userSelect: 'none',

    [`@media (max-width: ${constants.small}px)`]: {
      width: '100%',
      marginBottom: 10,
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
};
