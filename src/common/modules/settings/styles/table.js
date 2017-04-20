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
    padding: '28px 5px 12px',
    display: 'flex',
    position: 'relative',
    flex: '1',
    justifyContent: 'center',
    boxSizing: 'border-box',
    minWidth: '80px',
  },
  firstCell: {
    padding: '68px 5px 12px',
  },
  lastCell: {
    padding: '28px 5px 30px',
  },
  centerFlex: {
    display: 'flex',
    position: 'relative',
    textAlign: 'center',
  },
  firstTable: {
    paddingTop: '108px',
  },
  fixed: {
    color: '#1a1a1a',
    fontFamily: 'Prompt',
    fontSize: '10px',
    fontWeight: '300',
    position: 'absolute',
    zIndex: '20',
    paddingLeft: '10px',
  },
  titleFirstTable: {
    marginTop: '40px',
  },
  firstFixed: {
    marginTop: '35px',
  },
  fixedFirstTable: {
    marginTop: '80px',
  },
  titleFixed: {
    top: '0',
    color: 'grey',
    fontFamily: 'Prompt',
    fontSize: '20px',
    fontWeight: '400',
    paddingLeft: '20px',
  },
  textContainer: {
    width: '100%',
    position: 'relative',
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: 'grey',
    fontFamily: constants.fontFamily,
    fontSize: '12px',
    fontWeight: '300',
    '@media (max-width: 830px)': {
      fontSize: '11px',
    },
  },
  tableRow: {
    display: 'flex',
    position: 'relative',
    zIndex: '9',
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
  text: {
    wordWrap: 'break-word',
    wordBreak: 'break-word',
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
