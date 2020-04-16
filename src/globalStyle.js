import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    height: 100vh;
    width: 100vw;
    font-family: 'Open Sans', sans-serif;
    background-color: #789ad0;

    p {
      line-height: 1.2;
    }
  }

  * {
    box-sizing: border-box;
  }
`