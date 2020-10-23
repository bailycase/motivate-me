import React from 'react';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../src/theme/theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    width: 100vw;
    height: 100vh;
    background-color: #F0F5FF
  }
  #__next {
    height: 100%;
    width: 100%;
  }
`;

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
