import constants from '../../core/styles/constants';

const { middle, small } = constants;

export default {
  mediaWrapper: {
    position: 'relative',
    marginBottom: '10px',
    paddingBottom: '56.25%',
    height: 0,
    overflow: 'hidden',
    background: 'white',
    '& iframe': {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
    },
  },

  media: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    maxWidth: '100%',
    maxHeight: '100%',
    transform: 'translate(-50%, -50%)',
  },

  previewWrapper: {
    position: 'relative',
    height: 147,
    [`@media (max-width: ${middle}px)`]: {
      height: 111,
    },
    [`@media (max-width: ${small}px)`]: {
      height: 96,
    },
  },

  preview: {
    position: 'absolute',
    top: 0,
    left: 0,

    display: 'flex',
    width: '100%',
    height: '100%',
  },

  item: {
    position: 'relative',

    display: 'flex',
    flexShrink: 0,
    marginRight: 10,
    padding: 0,
    width: 140,
    height: 100,

    background: '#fff',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    '-webkit-tap-highlight-color': 'transparent',

    '&:last-child': {
      marginRight: 0,
    },

    '&::before': {
      display: 'none',
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: 5,
      background: '#bbd42c',
    },
    '&:hover:before': {
      display: 'block',
    },
    [`@media (max-width: ${middle}px)`]: {
      width: 120,
      height: 86,
    },
    [`@media (max-width: ${small}px)`]: {
      width: 100,
      height: 71,
    },
  },

  innerOverlay: {
    '&::before': {
      display: 'block',
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: 5,
      background: '#bbd42c',
    },
  },
  outerOverlay: {
    '&::after': {
      display: 'block',
      zIndex: 1,
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      opacity: 0.2,
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
    },
    '&:hover:after': {
      opacity: 0.15,
    },
  },
  arrow: {
    position: 'absolute',
    top: '50%',
    fontSize: '60px',
    marginTop: '-32px',
    fontWeight: '400',
    [`@media (max-width: ${middle}px)`]: {
      fontSize: '52px',
      marginTop: '-28px',
    },
    [`@media (max-width: ${small}px)`]: {
      fontSize: '44px',
      marginTop: '-24px',
    },
  },
  rightArrow: {
    right: '20px',
    [`@media (max-width: ${middle}px)`]: {
      right: '15px',
    },
    [`@media (max-width: ${small}px)`]: {
      right: '10px',
    },
  },
  leftArrow: {
    left: '20px',
    [`@media (max-width: ${middle}px)`]: {
      left: '15px',
    },
    [`@media (max-width: ${small}px)`]: {
      left: '10px',
    },
  },
  mediaType: {
    position: 'absolute',
    bottom: 5,
    right: 10,

    color: '#b3b3b3',
    fontSize: 16,
  },
  image: {
    height: '100%',
    width: 'auto',
    margin: '0 auto',

    overflow: 'hidden',
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
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '50%',
    boxSizing: 'border-box',
    cursor: 'pointer',
    color: '#e6e6e6',
    '&:hover': {
      color: 'grey',
    },
  },
  buttonRight: {
    right: 0,
  },
  buttonLeft: {
    left: 0,
  },
};
