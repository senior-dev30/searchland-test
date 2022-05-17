import { Theme } from '@mui/material/styles';

import { ColorProperty } from 'csstype';

declare module '@mui/material/styles' {
  // eslint-disable-next-line
  interface ThemeOptions {
    type: 'light' | 'dark';
    fonts: {
      primary: CSS.FontFamilyProperty;
      baseSize: CSS.FontSizeProperty;
    };
  }
}
