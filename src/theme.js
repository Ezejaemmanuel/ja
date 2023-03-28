import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#039be5',
      dark: '#006db3',
      light: '#63ccff',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f50057',
      dark: '#c51162',
      light: '#ff4081',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f4f4f4',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    h1: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#039be5',
      marginBottom: '1rem',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#039be5',
      marginBottom: '0.5rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      color: '#333333',
    },
  },
  spacing: {
    unit: 8,
  },
  shape: {
    borderRadius: 4,
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
      },
    },
    MuiTextField: {
      root: {
        background: '#ffffff',
        borderRadius: 4,
      },
    },
  },
});

export default theme;
