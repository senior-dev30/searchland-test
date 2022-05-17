import React, { PropsWithChildren } from 'react';

import { CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import { theme } from './theme';

export const LightThemeProvider: React.FunctionComponent<
  PropsWithChildren<Record<string, unknown>>
> = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <React.Fragment>{children}</React.Fragment>
  </MuiThemeProvider>
);
