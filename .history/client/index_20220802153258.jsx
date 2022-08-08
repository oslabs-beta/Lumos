/* eslint-disable linebreak-style */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import App from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7068F4',
      light: '#ba68c8',
      dark: '#7b1fa2',
    },
    secondary: {
      main: '#ff64b4',
      light: '#f06292',
      dark: '#c2185b',
    },
  },
  typography: {
    fontFamily: 'Quicksand',
  },
});

render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
