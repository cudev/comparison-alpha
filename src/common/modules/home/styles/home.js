import constants from '../../core/styles/constants';

export default {
  itemContainer: {
    width: '100%',
    background: 'white',
  },
  itemWrapper: {
    padding: '5px 15px 20px',

    '@media (max-width: 830px)': {
      padding: '5px 0 20px',
    },
  },
  outerWrapper: {
    marginTop: '-20px',
  },
  headerContainer: {
    boxSizing: 'border-box',
    maxWidth: 1440,
    padding: '0 15px',
    margin: '0 auto',
  },
  comparisonContainer: {
    padding: '0 15px',
  },
  bottomContainer: {
    margin: '0 auto',
    padding: '0 15px',
    maxWidth: '1440px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    display: 'flex',
    [`@media (max-width: ${constants.small}px)`]: {
      flexDirection: 'column',
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
