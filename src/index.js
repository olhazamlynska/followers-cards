import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'constants/theme';
import { GlobalStyle } from 'components/GlobalStyle/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter basename="/goit-test">
      <App />
    </BrowserRouter>
  </ThemeProvider>
  // </React.StrictMode>
);
