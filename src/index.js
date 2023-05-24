import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store } from './app/store'
import './index.css';
import App from './Components/Calculator/App';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
const root = ReactDOM.createRoot(document.getElementById('root'));

let theme = createTheme({
  typography: {
    h1: {
      fontFamily: 'League Spartan, sans-serif',
      color: "#000",
    },
    h2: {
      fontFamily: 'League Spartan, sans-serif',
      color: "#000",
    },
    h3: {
      fontFamily: 'League Spartan, sans-serif',
      color: "#000",
    },
    h4: {
      fontFamily: 'League Spartan, sans-serif',
      color: "#000",
      fontWeight: "700",
    },
    h5: {
      fontFamily: 'League Spartan, sans-serif',
      color: "#000",
      fontWeight:"700"
    },
    h6: {
      fontFamily: 'League Spartan, sans-serif',
      color: "#000",
      fontWeight:"700"
    },
    subtitle1: {
      fontFamily: 'League Spartan, sans-serif',
      color: "#5D5D5D",
    },
    subtitle2: {
      fontFamily: 'League Spartan, sans-serif',
      color: "hsl(278, 68%, 11%)",
    },
    body1: {
      fontFamily: 'League Spartan, sans-serif',
      color: "#C2B9B0",
    },
    body2: {
      fontFamily: 'League Spartan, sans-serif',
      color: "#C2B9B0",
    },
    button: {
      fontFamily: 'League Spartan, sans-serif',
    },
    caption: {
      fontFamily: 'League Spartan, sans-serif',
      color: "#000",
    },
    overline: {
      fontFamily: 'League Spartan, sans-serif',
    },
  },
});
theme = responsiveFontSizes(theme);

root.render(
  <React.StrictMode>
  {/* <Provider store={store}> */}
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  {/* </Provider> */}
  </React.StrictMode>
);
