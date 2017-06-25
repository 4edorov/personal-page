import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import App from './App';
import './index.css';
import { COLOR_APP } from './config/AppConfig';


const theme = createMuiTheme({
  palette: createPalette({
    primary: COLOR_APP.primary,
    accent: COLOR_APP.accent,
  }),
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
