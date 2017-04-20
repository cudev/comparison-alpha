import constants from '../../core/styles/constants';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column-reverse',
    maxWidth: '350px',
    backgroundColor: '#fff',
    width: '100%',

    '& $button:hover': {
      backgroundColor: '#a7ba3a',
    },
    '& $button:hover + $image $overlay': {
      opacity: '0.3',
    },
  },
  placeWrapper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'grey',
    paddingTop: 'calc(3px + (8 - 3) * (100vw - 320px) / (2000 - 320))',
    fallbacks: {
      paddingTop: '6px',
    },
    [`@media (max-width: ${constants.middle}px)`]: {
      paddingTop: 'calc(3px + (8 - 3) * (100vw - 320px) / (2000 - 320))',
      fallbacks: {
        paddingTop: '4px',
      },
    },
    [`@media (max-width: ${constants.small}px)`]: {
      paddingTop: 'calc(3px + (8 - 3) * (100vw - 320px) / (2000 - 320))',
      fallbacks: {
        paddingTop: '2px',
      },
    },
  },
  place: {
    textAlign: 'center',
    minWidth: '62px',
    boxSizing: 'border-box',

    [`@media (max-width: ${constants.middle}px)`]: {
      minWidth: '50px',
    },
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',

    [`@media (max-width: ${constants.middle}px)`]: {
      padding: '5px 15px',
      maxHeight: '40px',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      padding: '5px 10px',
    },
    '@media (max-width: 400px)': {
      wordBreak: 'break-all',
    },
  },
  textWrapper: {
    overflow: 'hidden',
    height: '45px',
    '@media (min-width: 1470px)': {
      maxWidth: '248px',
    },
    maxWidth: 'calc(((100vw - 330px) / 3) - 122px)',
    [`@media (max-width: ${constants.middle}px)`]: {
      height: '40px',
      maxWidth: 'calc(((100vw - 270px) / 2) - 95px)',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      maxWidth: 'calc((100vw - 180px) / 2)',
    },
  },
  header: {
    lineHeight: '1.2',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'stretch',
    color: '#4d4d4d',
    fontFamily: 'Prompt',
    fontSize: '18px',
    fontWeight: '600',
    textOverflow: 'ellipsis',
    height: '62px',

    [`@media (max-width: ${constants.middle}px)`]: {
      height: '50px',
      fontSize: '16px',
    },
  },
  number: {
    color: 'white',
    fontFamily: 'Prompt',
    fontWeight: '600',
    fontSize: 'calc(20px + (28 - 20) * (100vw - 320px) / (2000 - 320))',
    fallbacks: {
      fontSize: '28px',
    },
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: 'calc(20px + (28 - 20) * (100vw - 320px) / (2000 - 320))',
      fallbacks: {
        fontSize: '24px',
      },
    },
  },
  prefix: {
    color: 'white',
    verticalAlign: 'top',
    fontSize: 'calc(8px + (10 - 8) * (100vw - 320px) / (2000 - 320))',
    fallbacks: {
      fontSize: '10px',
    },
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: 'calc(8px + (10 - 8) * (100vw - 320px) / (2000 - 320))',
      fallbacks: {
        fontSize: '8px',
      },
    },
  },
  preposition: {
    color: 'white',
    fontFamily: 'Prompt',

    fontWeight: '600',
    textTransform: 'uppercase',
    opacity: '0.6',
    fontSize: 'calc(10px + (12 - 10) * (100vw - 320px) / (2000 - 320))',
    fallbacks: {
      fontSize: '12px',
    },
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: 'calc(10px + (12 - 10) * (100vw - 320px) / (2000 - 320))',
      fallbacks: {
        fontSize: '10px',
      },
    },
  },
  image: {
    display: 'flex',
    alignItems: 'flex-end',

    padding: '20px',
    boxSizing: 'border-box',
    position: 'relative',

    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '200px',
    color: '#fff',
    fontFamily: 'Prompt',
    fontSize: '12px',
    fontWeight: '600',

    [`@media (max-width: ${constants.middle}px)`]: {
      height: '180px',
      padding: '15px',
      fontSize: '11px',
      overflow: 'hidden',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      padding: '10px',
      height: '160px',
    },
  },
  statistics: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    zIndex: '10',

    [`@media (max-width: ${constants.middle}px)`]: {
      flexDirection: 'column',
    },
  },
  post: {
    display: 'flex',
    flexDirection: 'column',
    textTransform: 'uppercase',
  },
  view: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '30px',
    textTransform: 'uppercase',

    [`@media (max-width: ${constants.middle}px)`]: {
      padding: '20px 0 0',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      padding: '15px 0 0',
    },
  },
  property: {
    fontWeight: '400',
    textTransform: 'initial',
    color: '#e6e6e6',
    display: 'block',
  },
  buttonTextWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  button: {
    padding: '0 15px',
    width: '100%',
    boxSizing: 'border-box',

    backgroundColor: '#bbd42c',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '1.2',

    color: '#fff',
    fontFamily: 'Prompt',
    height: '40px',
    textTransform: 'uppercase',

    outline: 'none',
    border: 'none',

    cursor: 'pointer',

    fontWeight: '400',
    fontSize: '12px',

    [`@media (max-width: ${constants.middle}px)`]: {
      padding: '0 10px',
      fontSize: '11px',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      padding: '0 10px',
    },
  },
  buttonTitle: {
    fontSize: '16px',
    fontWeight: '600',
    textDecoration: 'none',

    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '14px',
    },
  },
  arrowWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  overlay: {
    opacity: '0.2',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
};

export default styles;
