const styles = {
  container: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    width: '141px',
    backgroundColor: 'rgba(243,243,243,0.5)',

    '@media (max-width: 1440px)': {
      width: 'calc((100vw - 42px)/10)',
      fallbacks: {
        width: '110px',
      },
    },
    '@media (max-width: 830px)': {
      width: '80px',
    },
  },
  containerClosed: {
    minWidth: '40px',
    maxWidth: '40px',
    width: '40px',
    overflow: 'hidden',
  },
  button: {
    outline: 'none',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    color: '#e5e5e5',
    fontSize: '20px',

    zIndex: '1',
    padding: '0',

    top: '10px',
    right: '10px',
    position: 'absolute',

    '&:hover': {
      color: '#b3b3b3',
    },
  },
  buttonClosed: {
    outline: 'none',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: '20px',

    position: 'absolute',
    color: '#fff',
    top: '10px',
    left: '0',
    right: '0',
    width: '100%',
    textShadow: '0 0 10px rgba(29, 6, 0, 0.5)',
    zIndex: '1',

    '&:hover': {
      textShadow: '0 0 10px rgba(29, 6, 0, 1.0)',
    },
  },
  overlay: {
    zIndex: '1',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundImage: `
    linear-gradient(to right, rgba(0, 0, 0, 0.35) 
    0%, rgba(0, 0, 0, 0.2) 10%, rgba(0, 0, 0, 0.2) 90%, 
    rgba(0, 0, 0, 0.35) 100%)`,
  },
  eye: {
    color: '#e5e5e5',
    cursor: 'pointer',
  },
};

export default styles;
