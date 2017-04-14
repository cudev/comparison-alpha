import constants from '../../core/styles/constants';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minWidth: '80px',
    alignItems: 'center',
    position: 'relative',

  },
  fixed: {
    position: 'absolute',
    zIndex: '20',
    padding: '5px 0 5px 20px',
    whiteSpace: 'nowrap',
  },
  title: {
    color: 'grey',
    fontFamily: 'Prompt',
    fontSize: '20px',
    fontWeight: '400',
    paddingLeft: '20px',
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '18px',
    },
  },
  header: {
    backgroundColor: '#fff',
    height: '40px',
    width: '100%',

  },
  circleContainer: {
    padding: '15px 0px',
    backgroundColor: '#fff',
    borderTop: '1px solid #f7f7f7',
    zIndex: 0,
    width: '100%',
    [`@media (max-width: ${constants.middle}px)`]: {
      padding: '10px 0px',
    },
  },
};

export default styles;

