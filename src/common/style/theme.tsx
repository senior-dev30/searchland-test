import { createTheme } from '@mui/material';

import PlusJakartaSans from 'common/assets/fonts/PlusJakartaSans-Regular.ttf';

export const MuiCustomTheme = createTheme({
  type: 'light',
  fonts: {
    primary:
      '"PlusJakartaSans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif',
    baseSize: '14px',
  },
  palette: {
    mode: 'light',
    text: {
      primary: '#1B1B1B',
    },
  },
  typography: {
    subtitle1: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '143%',
      letterSpacing: '0.17px',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': {
          fontFamily: 'PlusJakartaSans',
          src: `local("PlusJakartaSans"), url(${PlusJakartaSans}) format("truetype")`,
        },
        body: {
          fontFamily:
            '"PlusJakartaSans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif',
          background: '#F7F9FB',
        },
        '& .MuiTypography-root': {
          fontFamily:
            '"PlusJakartaSans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif',
        },
        '& .Mui-checked': {
          color: '#21B6A8 !important',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          color: 'primary',
        },
      },
    },
  },
});
