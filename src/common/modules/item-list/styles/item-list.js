import constants from '../../core/styles/constants';

export default {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '0 20px 20px 0',
    [`@media (max-width: ${constants.middle}px)`]: {
      padding: '0 15px 15px 0',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      padding: '0 0 10px',
    },
  },
  itemWrapper: {
    maxWidth: '140px',
    minWidth: '80px',
    padding: '0 1px 1px 0',
    width: '12.5%',
    boxSizing: 'border-box',
    '@media (max-width: 1005px)': {
      width: '14.28%',
    },
    '@media (max-width: 850px)': {
      width: '16.66%',
    },
    '@media (max-width: 770px)': {
      width: '20%',
    },
    '@media (max-width: 690px)': {
      width: '25%',
    },
    '@media (max-width: 615px)': {
      width: '33.3%',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      width: '20%',
    },
    '@media (max-width: 430px)': {
      width: '25%',
    },
    '@media (max-width: 350px)': {
      width: '33.3%',
    },
  },
};
