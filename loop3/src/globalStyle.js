import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    height: 100vh;
    width: 100vw;
    font-family: 'Roboto', sans-serif;
    background: #00a185;
    
    p {
      line-height: 1.2;
    }
  }

  * {
    box-sizing: border-box;
  }
`