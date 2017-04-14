import constants from '../../core/styles/constants';

export default {
  sidebar: {
    width: '40%',
    marginLeft: '10px',
    userSelect: 'none',

    [`@media (max-width: ${constants.small}px)`]: {
      width: '100%',
      marginLeft: '0px',
      marginTop: '10px',
    },
  },
  rating: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
  },
  title: {
    backgroundColor: '#fff',
    marginBottom: '1px',
    lineHeight: '1.2',
    color: 'grey',
    fontFamily: 'Prompt',
    fontSize: '20px',
    fontWeight: '400',
    padding: '10px 20px',
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '18px',
      padding: '5px 15px',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      padding: '5px 10px',
    },
  },
  ratingContainer: {
    display: 'flex',
    backgroundColor: '#fff',
    maxHeight: '80px',
    paddingLeft: '10px',
  },
  ratingData: {
    fontSize: '56px',
    fontFamily: 'Prompt',
    fontWeight: '300',
    color: '#333',

    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '48px',
    },
  },
  ratingCircle: {
    display: 'flex',
    alignItems: 'center',
    [`@media (max-width: ${constants.middle}px)`]: {
      width: '68px',
    },
  },
  fractional: {
    color: 'grey',
    fontSize: '28px',
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '24px',
    },
  },
  icon: {
    fontSize: '30px',
    fontWeight: '400',
    paddingRight: '10px',
    verticalAlign: 'sub',
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '26px',
    },
  },
  suffix: {
    fontSize: '14px',
    fontWeight: '300',
    verticalAlign: 'top',
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '12px',
    },
  },
  comparison: {
    fontSize: '18px',
    fontWeight: '400',
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '16px',
    },
  },
  ranking: {
    marginBottom: '10px',
  },
  position: {
    padding: '15px 0 15px 20px',
    backgroundColor: '#fff',
    color: '#7f7f7f',
    fontFamily: 'Prompt',

    [`@media (max-width: ${constants.middle}px)`]: {
      padding: '10px 0 10px 15px',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      padding: '5px 0 5px 10px',
    },
  },
  number: {
    fontSize: '36px',
    fontWeight: '300',
    paddingRight: '10px',
    display: 'inline',
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '32px',
    },
  },
  awardContainer: {
    display: 'flex',
    background: '#fff',
    padding: '10px 20px 0 ',
    flexWrap: 'wrap',

    [`@media (max-width: ${constants.middle}px)`]: {
      padding: '5px 15px 0',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      padding: '5px 10px 0',
    },
  },
  awards: {
    marginBottom: '10px',
  },
  award: {
    padding: '0 10px 10px 0',
    paddingBottom: '10px',
    [`@media (max-width: ${constants.middle}px)`]: {
      padding: '0 5px 5px 0',
    },
  },
  price: {
    padding: '15px 20px 0px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap-reverse',
    flexDirection: 'row-reverse',

    backgroundColor: '#fff',

    [`@media (max-width: ${constants.middle}px)`]: {
      padding: '10px 15px',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      padding: '5px 10px',
    },
  },
  button: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: '40px',
    width: '86px',

    backgroundColor: '#bbd42c',

    outline: 'none',
    border: 'none',

    cursor: 'pointer',

    color: '#fff',
    fontFamily: constants.fontFamily,
    fontSize: '16px',
    fontWeight: '600',
    textTransform: 'uppercase',
    textDecoration: 'none',

    '&:hover': {
      backgroundColor: '#a7ba3a',
    },
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '14px',
    },
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '86px',
    marginLeft: '50px',
    paddingBottom: '20px',
    [`@media (max-width: ${constants.middle}px)`]: {
      marginLeft: '40px',
      paddingBottom: '15px',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      marginLeft: '30px',
      paddingBottom: '10px',
    },
  },
  dataContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    paddingBottom: '20px',
    [`@media (max-width: ${constants.middle}px)`]: {
      paddingBottom: '15px',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      paddingBottom: '10px',
    },
  },
  bar: {
    backgroundColor: '#bbd42c',
    width: '5px',
    height: '40px',
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  signContainer: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    marginRight: '15px',
    [`@media (max-width: ${constants.middle}px)`]: {
      marginRight: '10px',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      marginRight: '5px',
    },
  },
  producer: {
    color: '#1a1a1a',
    fontFamily: 'Prompt',
    fontSize: '16px',
    fontWeight: '300',

    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '14px',
      paddingRight: '15px',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      paddingLeft: '10px',
    },
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    lineHeight: '1.2',
  },
  option: {
    textTransform: 'capitalize',
    color: '#1a1a1a',
    fontFamily: 'Prompt',
    fontSize: '10px',
    fontWeight: '300',
    whiteSpace: 'nowrap',

    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '9px',
    },

  },
  leftContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: '20px',
    position: 'relative',
    [`@media (max-width: ${constants.middle}px)`]: {
      paddingRight: '15px',
    },
    [`@media (max-width: ${constants.small}px)`]: {
      paddingRight: '10px',
    },
  },
  rightContainer: {
    display: 'flex',
  },
  amount: {
    color: '#1a1a1a',
    fontFamily: 'Prompt',
    fontSize: '24px',
    fontWeight: '300',
    [`@media (max-width: ${constants.middle}px)`]: {
      fontSize: '20px',
    },
  },
  producerSign: {
    width: '100%',
    height: 'auto',
  },
};
