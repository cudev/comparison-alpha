import constants from '../../core/styles/constants';

const styles = {
  container: {
    maxWidth: '1410px',
    margin: '0 auto',
  },
  specificationComparisonContainer: {
    display: 'flex',
    flexDirection: 'column',
    [`@media (max-width: ${constants.middle}px) and  (min-width: ${constants.small}px)`]: {
      width: 'calc(100vw - 270px)',
    },
  },
  comparisonContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '1110px',
  },
  specificationContainer: {
    display: 'flex',
    maxWidth: '1110px',
    padding: '0 20px 0 0',
    boxSizing: 'border-box',
    [`@media (max-width: ${constants.middle}px)`]: {
      padding: '0 15px 0 0',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      padding: '0 0 10px',
    },
  },
  comparisonWrapper: {
    padding: '0 20px 20px 0',
    flexGrow: '1',
    boxSizing: 'border-box',
    flexBasis: '33%',

    [`@media (max-width: ${constants.middle}px)`]: {
      padding: '0 15px 15px 0',
      flexBasis: '50%',
    },

    [`@media (max-width: ${constants.small}px)`]: {
      padding: '0 5px 10px 0',
      '&:nth-child(2n)': {
        padding: '0 0 10px 5px',
      },
    },
  },

  advertisementContainer: {
    display: 'flex',
    flexBasis: '300px',
    flexDirection: 'column',
    [`@media (max-width: ${constants.middle}px)`]: {
      flexBasis: '240px',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      flexBasis: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  },
  advertisementWrapper: {
    paddingBottom: '20px',
    boxSizing: 'border-box',

    [`@media (max-width: ${constants.middle}px)`]: {
      paddingBottom: '15px',
    },

    [`@media (max-width: ${constants.small}px)`]: {
      padding: '0 5px 10px 0',
      flexBasis: '50%',
      '&:nth-child(2n)': {
        padding: '0 0 10px 5px',
      },
    },
  },
  advertisement: {
    width: '300px',
    verticalAlign: 'middle',

    [`@media (max-width: ${constants.middle}px)`]: {
      width: '240px',
    },

    [`@media (max-width: ${constants.small}px)`]: {
      width: '100%',
      height: 'auto',
    },
  },
  comparisonCardContainer: {
    display: 'flex',
    [`@media (max-width: ${constants.small}px)`]: {
      flexDirection: 'column',

    },
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

export default styles;
