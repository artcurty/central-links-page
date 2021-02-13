import { createGlobalStyle, ThemeProvider } from "styled-components";

import styledConfig from "../config.json";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${styledConfig.options.fontType}, sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={styledConfig}>
        <Component {...pageProps} {...styledConfig} />
      </ThemeProvider>
    </>
  );
}
