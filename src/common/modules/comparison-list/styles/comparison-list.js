import constants from '../../core/styles/constants';

const styles = {
  comparisonContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    '@media (min-width: 1470px)': {
      maxWidth: '1110px',
    },
    maxWidth: 'calc(100vw - 330px)',
    [`@media (max-width: ${constants.middle}px)`]: {
      maxWidth: 'calc(100vw - 270px)',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      maxWidth: 'calc(100vw - 30px)',
    },
  },
  comparisonWrapper: {
    padding: '0 20px 20px 0',
    boxSizing: 'border-box',
    width: '33.3%',

    [`@media (max-width: ${constants.middle}px)`]: {
      padding: '0 15px 15px 0',
      width: '50%',
    },

    [`@media (max-width: ${constants.small}px)`]: {
      padding: '0 5px 10px 0',
      '&:nth-child(2n)': {
        padding: '0 0 10px 5px',
      },
    },
  },
};

export default styles;
