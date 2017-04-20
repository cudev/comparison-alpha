import constants from '../../core/styles/constants';

const styles = {
  table: {
    width: '100%',
    textAlign: 'center',
    borderCollapse: 'collapse',
    tableLayout: 'fixed',
  },

  cell: {
    backgroundColor: 'white',
    padding: '18px 5px 12px',
    display: 'flex',
    position: 'relative',
    flex: '1',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
    minWidth: '80px',
    color: '#999',
    '@media (min-width: 1440px)': {
      width: '120px',
    },
    '@media (max-width: 1439px)': {
      width: 'calc((100vw - 30px) / 10 - 20px)',
    },
    [`@media (max-width: ${constants.middle}px)`]: {
      padding: '22px 5px 10px',
      width: 'calc((100vw - 30px) / 10 - 10px)',
    },
    '@media (max-width: 830px)': {
      width: '70px',
    },
  },
  centerFlex: {
    display: 'flex',
    position: 'relative',
    textAlign: 'center',
  },
  textContainer: {
    width: '100%',
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    fontFamily: constants.fontFamily,
    fontSize: '24px',
    fontWeight: '300',
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '20px',
    },
  },
  text: {
    wordWrap: 'break-word',
    wordBreak: 'break-word',
  },
  firstCell: {
    transform: 'translate(20px)',
    color: '#666',
  },
  tableRow: {
    display: 'flex',
    position: 'relative',
  },
  cellClosed: {
    width: '40px',
    overflow: 'hidden',
    minWidth: '40px',
    maxWidth: '40px',
  },
  overlay: {
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: '10',
    position: 'absolute',
    backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.2) 10%, rgba(0, 0, 0, 0.2) 90%, rgba(0, 0, 0, 0.35) 100%)',
  },
  topOverlay: {
    background: '#e9e9e9',
    position: 'absolute',
    top: '0',
    height: '1px',
    width: '100%',
    zIndex: '2',
  },
};

export default styles;
