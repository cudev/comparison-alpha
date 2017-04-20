import constants from '../../core/styles/constants';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',

    padding: '10px 10px 20px',
    backgroundColor: '#fff',

    boxSizing: 'border-box',
    [`@media (max-width: ${constants.middle}px)`]: {
      padding: '5px 5px 15px',
    },
  },

  position: {
    width: '34px',
    height: '24px',

    backgroundRepeat: 'no-repeat',
    paddingBottom: '5px',

    margin: '0 auto',
  },
  imageContainer: {
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (min-width: 1440px)': {
      height: '120px',
    },
    '@media (max-width: 1439px)': {
      height: 'calc((100vw - 30px) / 10 - 20px)',
    },
    '@media (max-width: 960px)': {
      height: 'calc((100vw - 30px) / 10 - 10px)',
    },
    '@media (max-width: 830px)': {
      height: '69px',
    },
  },
  image: {
    height: 'auto',
    width: '100%',
    maxWidth: '8vw',
    display: 'block',
    border: 'none',
    '@media (min-width: 1470px)': {
      maxWidth: '120px',
    },
    '@media (max-width: 830px)': {
      maxWidth: '70px',
    },
  },
  shadow: {
    height: '20px',
    padding: '10px 0',

    backgroundImage: 'url(/images/shadow.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    [`@media (max-width: ${constants.middle}px)`]: {
      height: '15px',
      padding: '5px 0',
    },

  },
  itemName: {
    color: '#1a1a1a',
    fontFamily: 'Prompt',
    fontSize: '12px',
    fontWeight: '400',
    textAlign: 'center',
    height: '28.8px',
    overflow: 'hidden',
    lineHeight: '1.2',
    [`@media (max-width: ${constants.middle}px)`]: {
      height: '26px',
      fontSize: '11px',
    },
  },
  resetLink: {
    textDecoration: 'none',
  },
};

export default styles;
