export default {
  loader: {
    margin: '60px auto',
    fontSize: 10,
    position: 'relative',
    textIndent: '-9999em',
    transform: 'translateZ(0)',
    animation: 'load8 1.1s infinite linear',
    borderRadius: '50%',
    width: '10em',
    height: '10em',

    '&::after': {
      borderRadius: '50%',
      width: '10em',
      height: '10em',
    },
  },
  '@keyframes load8': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
};
