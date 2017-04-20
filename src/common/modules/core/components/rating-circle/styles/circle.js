import constants from '../../../styles/constants';

const styles = {
  container: {
    backgroundColor: '#fff',
  },
  ratingContainer: {

    alignItems: 'center',
    position: 'relative',
    margin: '0 auto',
    textAlign: 'center',
    justifyContent: 'center',
    zIndex: 2,
    maxWidth: '8vw',
    maxHeight: '8vw',
    '@media (min-width: 1440px)': {
      maxWidth: '120px',
      maxHeight: '120px',
    },
    '@media (max-width: 700px)': {
      maxWidth: '9vw',
      maxHeight: '9vw',
    },
    '@media (max-width: 675px)': {
      maxWidth: '9.5vw',
      maxHeight: '9.5vw',
    },
    '@media (max-width: 650px)': {
      maxWidth: '10vw',
      maxHeight: '10vw',
    },
    '@media (max-width: 625px)': {
      maxWidth: '10.5vw',
      maxHeight: '10.5vw',
    },
    '@media (max-width: 600px)': {
      maxWidth: '10.5vw',
      maxHeight: '10.5vw',
    },
    '@media (max-width: 575px)': {
      maxWidth: '11vw',
      maxHeight: '11vw',
    },
    '@media (max-width: 550px)': {
      maxWidth: '11.5vw',
      maxHeight: '11.5vw',
    },
    '@media (max-width: 525px)': {
      maxWidth: '12vw',
      maxHeight: '12vw',
    },
    '@media (max-width: 500px)': {
      maxWidth: '12.5vw',
      maxHeight: '12.5vw',
    },
    '@media (max-width: 475px)': {
      maxWidth: '13vw',
      maxHeight: '13vw',
    },
    '@media (max-width: 450px)': {
      maxWidth: '13.5vw',
      maxHeight: '13.5vw',
    },
    '@media (max-width: 425px)': {
      maxWidth: '14vw',
      maxHeight: '14vw',
    },
    '@media (max-width: 400px)': {
      maxWidth: '14.5vw',
      maxHeight: '14.5vw',
    },
    '@media (max-width: 375px)': {
      maxWidth: '15vw',
      maxHeight: '15vw',
    },
    '@media (max-width: 350px)': {
      maxWidth: '15.5vw',
      maxHeight: '15.5vw',
    },
    '@media (max-width: 325px)': {
      maxWidth: '16vw',
      maxHeight: '16vw',
    },
    '@media (max-width: 300px)': {
      maxWidth: '16.5vw',
      maxHeight: '16.5vw',
    },
    '@media (max-width: 275px)': {
      maxWidth: '17vw',
      maxHeight: '17vw',
    },
    '@media (max-width: 250px)': {
      maxWidth: '17.5vw',
      maxHeight: '17.5vw',
    },
    '@media (max-width: 225px)': {
      maxWidth: '18vw',
    },
  },
  circle: {
    display: 'block',
    transform: 'rotate(-90deg)',
    width: '100%',
    height: '100%',
    maxWidth: '8vw',
    maxHeight: '8vw',
    '@media (max-width: 700px)': {
      maxWidth: '9vw',
      maxHeight: '9vw',
    },
    '@media (max-width: 675px)': {
      maxWidth: '9.5vw',
      maxHeight: '9.5vw',
    },
    '@media (max-width: 650px)': {
      maxWidth: '10vw',
      maxHeight: '10vw',
    },
    '@media (max-width: 625px)': {
      maxWidth: '10.5vw',
      maxHeight: '10.5vw',
    },
    '@media (max-width: 600px)': {
      maxWidth: '10.5vw',
      maxHeight: '10.5vw',
    },
    '@media (max-width: 575px)': {
      maxWidth: '11vw',
      maxHeight: '11vw',
    },
    '@media (max-width: 550px)': {
      maxWidth: '11.5vw',
      maxHeight: '11.5vw',
    },
    '@media (max-width: 525px)': {
      maxWidth: '12vw',
      maxHeight: '12vw',
    },
    '@media (max-width: 500px)': {
      maxWidth: '12.5vw',
      maxHeight: '12.5vw',
    },
    '@media (max-width: 475px)': {
      maxWidth: '13vw',
      maxHeight: '13vw',
    },
    '@media (max-width: 450px)': {
      maxWidth: '13.5vw',
      maxHeight: '13.5vw',
    },
    '@media (max-width: 425px)': {
      maxWidth: '14vw',
      maxHeight: '14vw',
    },
    '@media (max-width: 400px)': {
      maxWidth: '14.5vw',
      maxHeight: '14.5vw',
    },
    '@media (max-width: 375px)': {
      maxWidth: '15vw',
      maxHeight: '15vw',
    },
    '@media (max-width: 350px)': {
      maxWidth: '15.5vw',
      maxHeight: '15.5vw',
    },
    '@media (max-width: 325px)': {
      maxWidth: '16vw',
      maxHeight: '16vw',
    },
    '@media (max-width: 300px)': {
      maxWidth: '16.5vw',
      maxHeight: '16.5vw',
    },
    '@media (max-width: 275px)': {
      maxWidth: '17vw',
      maxHeight: '17vw',
    },
    '@media (max-width: 250px)': {
      maxWidth: '17.5vw',
      maxHeight: '17.5vw',
    },
    '@media (max-width: 225px)': {
      maxWidth: '18vw',
    },

  },
  rating: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    color: '#4d4d4d',
    fontSize: 'calc(14px + (20 - 14) * (100vw - 320px) / (2000 - 320))',
    fallbacks: {
      fontSize: '20px',
    },
    fontWeight: '600',
    fontFamily: constants.fontFamily,

    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: 'calc(14px + (20 - 14) * (100vw - 320px) / (2000 - 320))',
      fallbacks: {
        fontSize: '18px',
      },
    },

    [`@media (max-width: ${constants.small}px)`]: {
      fontSize: 'calc(14px + (20 - 14) * (100vw - 320px) / (2000 - 320))',
      fallbacks: {
        fontSize: '16px',
      },
    },
  },
  fractional: {
    color: '#808080',
    fontSize: '10px',
    fontWeight: '300',
    verticalAlign: 'baseline',

    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '9px',
    },
  },
};

export default styles;
