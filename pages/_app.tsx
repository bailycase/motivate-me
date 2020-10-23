import React from 'react';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
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

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme.light}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
