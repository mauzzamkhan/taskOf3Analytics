import { createTheme } from '@mui/material/styles';

const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: '#0F1E46',
      contrastText: '#F08D86',
    },
    background: {
      default: mode === 'light' ? '#ffffff' : '#0F1E46',
      paper: mode === 'light' ? '#f5f5f5' : '#424242',
    },
    divider: '#F08D86',
    text: {
      primary: mode === 'light' ? '#0F1E46' : '#fff',
    },
    action: {
      active: '#F08D86',
    },
    sendMessage: {
      background: '#FCE8E7',
      text: '#262528',
    },
    receivedMessage: {
      background: '#D5DAE7',
      text: '#212328',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#F08D86',
          color: '#0F1E46',
          '&:hover': {
            backgroundColor: mode === 'light' ? '#d76c6b' : '#b75a59',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#F08D86',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#F08D86',
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          backgroundColor: '#2E3F6C',
          color: '#fff',
          fontSize: '14px',
        },
      },
    },
  },

});
export default getTheme;
