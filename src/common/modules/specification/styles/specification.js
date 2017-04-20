import constants from '../../core/styles/constants';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  title: {
    height: '80px',
    background: '#ffffff',
    padding: '15px 20px',
    margin: '0 0 5px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    color: 'grey',
    fontFamily: constants.fontFamily,
    fontSize: '30px',
    fontWeight: '300',
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '26px',
      padding: '10px 15px',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      padding: '5px 10px',
    },
  },
  table: {
    display: 'flex',
    background: 'white',
    fontFamily: constants.fontFamily,
    lineHeight: '1.2',
    borderBottom: '5px solid #f7f7f7',
    paddingBottom: '5px',
    [`@media (max-width: ${constants.middle}px)`]: {
      flexDirection: 'column',
    },
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  header: {
    color: '#333',
    fontSize: '20px',
    fontWeight: '400',
    padding: '15px 20px',
    minWidth: '145px',
    maxWidth: '145px',
    boxSizing: 'border-box',
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '18px',
      padding: '10px 15px',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      padding: '5px 10px',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingTop: '10px',
    [`@media (max-width: ${constants.small}px)`]: {
      paddingTop: '0px',
    },
  },
  parameter: {
    color: 'grey',
    fontSize: '16px',
    fontWeight: '400',
    padding: '10px 20px',
    minWidth: '145px',
    maxWidth: '145px',
    boxSizing: 'border-box',
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '14px',
      padding: '5px 15px',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      padding: '5px 10px',
      maxWidth: '100%',
    },
  },
  value: {
    lineHeight: '1.6',
    color: 'grey',
    fontSize: '16px',
    fontWeight: '300',
    padding: '10px 20px',
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '14px',
      padding: '5px 15px',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      padding: '5px 10px',
    },
  },
  tableRow: {
    display: 'flex',
    borderBottom: '1px solid #f7f7f7',
    [`@media (max-width: ${constants.small}px)`]: {
      flexDirection: 'column',
    },
    '&:last-child': {
      borderBottom: 'none',
    },
  },
};

export default styles;
