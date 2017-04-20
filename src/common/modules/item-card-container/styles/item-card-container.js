import constants from '../../core/styles/constants';

const styles = {
  outerContainer: {
    width: '100%',
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    maxWidth: '1410px',
    margin: '0 auto',
    position: 'relative',
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
  view: {
    maxHeight: 'none!important',
  },
  innerContainer: {
    overflowX: 'auto',
    paddingBottom: '10px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  innerWrapper: {
    display: 'flex',

    '@media (max-width: 830px)': {
      padding: '0 15px',
      display: 'inline-flex',
    },

  },
  itemContainer: {
    minWidth: '140px',
    flex: 1,
    '@media (max-width: 1439px)': {
      minWidth: 'calc((100vw - 30px)/10)',
    },
    '@media (max-width: 830px)': {
      minWidth: '80px',
    },
  },
  buttonWrapper: {
    textDecoration: 'none',
  },
  buttonTextWrapper: {
    alignItems: 'center',
    display: 'flex',
  },
  button: {
    margin: '0 auto',
    padding: '0 calc(40px + (80 - 40) * (100vw - 320px) / (960 - 320))',
    fallbacks: {
      padding: '0 40px',
    },

    backgroundColor: '#bbd42c',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '1.2',
    color: '#fff',
    fontFamily: 'Prompt',
    height: '50px',
    textTransform: 'uppercase',

    outline: 'none',
    border: 'none',

    cursor: 'pointer',

    fontWeight: '400',
    fontSize: '12px',

    [`@media (max-width: ${constants.middle}px)`]: {
      padding: '0 calc(40px + (80 - 40) * (100vw - 320px) / (960 - 320))',
      fallbacks: {
        padding: '0 30px',
      },
      fontSize: '11px',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      padding: '0 calc(40px + (80 - 40) * (100vw - 320px) / (960 - 320))',
      fallbacks: {
        padding: '0 20px',
      },
    },

    '&:hover': {
      backgroundColor: '#a7ba3a',
    },
  },
  buttonTitle: {
    fontSize: '16px',
    fontWeight: '600',

    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '14px',
    },
  },
  overlayLeft: {
    backgroundColor: 'white',
    position: 'absolute',
    height: '100%',
    width: '15px',
    left: '0',
  },
  overlayRight: {
    backgroundColor: 'white',
    position: 'absolute',
    height: '100%',
    width: '15px',
    right: '0',
  },
};

export default styles;
