import constants from '../../core/styles/constants';


const styles = {
  container: {
    margin: '0 auto',
    maxWidth: '1440px',
    '@media (min-width: 1441px)': {
      backgroundColor: 'rgba(243,243,243,0.5)',
      maxWidth: '1410px',
    },
  },
  afterBlock: {
    height: '36px',
    width: '100%',
  },
  settings: {
    position: 'absolute',
    top: '0',
    width: '80%',
  },
  itemContainer: {
    display: 'flex',
  },
  tableContainer: {
    backgroundColor: '#ffffff',
  },
  outerContainer: {
    display: 'block',
    margin: '0',

    '@media (max-width: 1440px)': {
      margin: '0 15px',
    },
  },
  title: {
    position: 'absolute',
    zIndex: '20',
    height: '40px',
    lineHeight: '2',
    padding: ' 0 20px',
    fontSize: '20px',
    verticalAlign: 'middle',
    color: '#808080',
    fontFamily: constants.fontFamily,
    fontWeight: '400',
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '18px',
    },
  },
  settingContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    zIndex: '20',
  },
  table: {
    width: '100%',
    textAlign: 'center',
    tableLayout: 'fixed',
    border: 'none',
    borderCollapse: 'collapse',
  },
  trackHorizontal: {
    position: 'absolute',
    height: '36px!important',
    right: '2px',
    bottom: '0px',
    left: '2px',
    borderRadius: '3px',
    zIndex: '20',
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
  trackView: {
    maxHeight: 'none!important',
    overflowX: 'scroll',
    marginBottom: '-17px',
  },
};

export default styles;
