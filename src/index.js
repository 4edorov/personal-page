import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import App from './App';
import './index.css';
import { COLOR_APP } from './config/AppConfig';


const theme = createMuiTheme({
  palette: {
    primary: COLOR_APP.primary,
    secondary: COLOR_APP.secondary,
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
