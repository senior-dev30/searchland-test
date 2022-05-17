import React, { PropsWithChildren } from 'react';

import { CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import { MuiCustomTheme } from './theme';

export const LightThemeProvider: React.FunctionComponent<
  PropsWithChildren<Record<string, unknown>>
> = ({ children }) => (
  <MuiThemeProvider theme={MuiCustomTheme}>
    <CssBaseline />
    <React.Fragment>{children}</React.Fragment>
  </MuiThemeProvider>
);
