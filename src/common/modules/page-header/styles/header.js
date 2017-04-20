import constants from '../../core/styles/constants';

const { middle, small } = constants;

export default {
  header: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },

  pageMenu: {
    zIndex: 30,

    display: 'flex',
    height: 80,
    width: '100%',
    justifyContent: 'center',

    backgroundColor: '#1d426e',

    [`@media (max-width: ${middle}px)`]: {
      height: 60,
    },

    [`@media (max-width: ${small}px)`]: {
      height: 50,
    },
  },

  container: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',
    maxWidth: 1440,
    height: '100%',
    padding: '0 15px',
  },

  link: {
    display: 'block',

    textDecoration: 'none',
    '-webkit-tap-highlight-color': 'transparent',
  },

  logo: {
    marginRight: 40,

    userSelect: 'none',

    [`@media (max-width: ${middle}px)`]: {
      height: 35,
      marginRight: 30,
    },

    [`@media (max-width: ${small}px)`]: {
      height: 27,
      width: 95,
      marginRight: 20,
    },

    '@media (max-width: 340px)': {
      marginRight: 10,
    },
  },

  pageNav: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    alignContent: 'center',

    '-webkit-tap-highlight-color': 'transparent',
  },

  searchIcon: {
    fontSize: 24,
    color: '#fefefe',
    position: 'relative',
    top: 0,
    left: 0,

    [`@media (max-width: ${middle}px)`]: {
      fontSize: 20,
    },
  },

  navList: {
    display: 'flex',
    height: '100%',
    margin: 0,
    padding: 0,
    alignItems: 'center',
    listStyle: 'none',
  },

  navItem: {
    position: 'relative',

    display: 'flex',
    alignItems: 'center',
    height: '100%',
    padding: '0 20px',

    color: '#fff',
    fontFamily: 'Prompt',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 2.44,

    cursor: 'pointer',
    userSelect: 'none',

    '&:first-child': {
      padding: 0,
    },

    '&:last-child': {
      padding: 0,
    },

    '&:hover': {
      backgroundColor: '#3e5e83',
    },

    '&:active': {
      backgroundColor: '#607a99',
    },

    [`@media (max-width: ${middle}px)`]: {
      padding: '0 15px',

      fontSize: 14,

      '&:nth-child(4), &:nth-child(5)': {
        display: 'none',
      },
    },

    [`@media (max-width: ${small}px)`]: {
      padding: '0 10px',

      '&:nth-child(2), &:nth-child(3)': {
        display: 'none',
      },
    },
  },

  navItemActive: {
    backgroundColor: '#3e5e83',
  },

  navItemButton: {
    '&:active': {
      backgroundColor: '#3e5e83',
    },
  },

  button: {
    width: '100%',
    height: '100%',
    padding: '0 20px',

    background: 'none',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',

    [`@media (max-width: ${middle}px)`]: {
      padding: '0 15px',
    },

    [`@media (max-width: ${small}px)`]: {
      padding: '0 10px',
    },

    '@media (max-width: 340px)': {
      padding: '0 5px',
    },
  },

  buttonMore: {
    extend: 'button',

    alignItems: 'center',

    color: '#fff',
    fontFamily: 'Prompt',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 2.44,
    height: '100%',

    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',

    '&::before': {
      content: '"Other"',
      position: 'relative',
      verticalAlign: 'middle',
    },
    [`@media (max-width: ${middle}px)`]: {
      fontSize: 14,
    },
    [`@media (max-width: ${small}px)`]: {
      '&::before': {
        content: '"Comparisons"',
      },
    },
  },

  arrowDownIcon: {
    display: 'inline-flex',
    verticalAlign: 'middle',
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
    position: 'relative',
    top: 0,
    left: 0,
    [`@media (max-width: ${middle}px)`]: {
      marginLeft: 5,

      fontSize: 18,
    },
  },

  dropdown: {
    position: 'absolute',
    top: '100%',
    right: 0,
    zIndex: 30,

    display: 'none',
    width: 300,
    margin: 0,
    padding: '10px 0',

    background: '#ffffff',
    listStyle: 'none',
  },

  dropdownActive: {
    display: 'block',
  },

  dropdownItem: {
    padding: '15px 20px',

    color: '#333',
    fontFamily: 'Prompt',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 'normal',

    borderBottom: '1px solid rgba(000, 000, 000, 0.1)',
    userSelect: 'none',

    '&:nth-child(-n+4)': {
      display: 'none',
    },

    '&:last-child': {
      borderBottom: 0,
    },

    '&:hover': {
      backgroundColor: '#dde3e9',
    },

    '&:active': {
      backgroundColor: '#d2d9e2',
    },

    [`@media (max-width: ${middle}px)`]: {
      fontSize: 14,

      '&:nth-child(-n+4)': {
        display: 'block',
      },

      '&:nth-child(-n+2)': {
        display: 'none',
      },
    },

    [`@media (max-width: ${small}px)`]: {
      '&:nth-child(-n+4)': {
        display: 'block',
      },

      '&:nth-child(-n+2)': {
        display: 'block',
      },
    },
  },

  overlay: {
    content: '""',
    position: 'fixed',
    left: 0,
    top: 0,

    display: 'none',
    minWidth: '100%',
    minHeight: '100%',

    border: 'none',
    outline: 'none',
    backgroundColor: '#000',
    opacity: 0.2,
  },

  overlaySearchOpen: {
    zIndex: 20,

    display: 'block',
  },

  overlayDropdownOpen: {
    zIndex: 20,

    display: 'block',
  },
};
