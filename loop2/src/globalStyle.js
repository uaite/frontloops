import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import background from './assets/img/background.jpg';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    height: 100vh;
    width: 100vw;
    font-family: 'Roboto', sans-serif;
    background: center url(${background});

    p {
      line-height: 1.2;
    }
  }

  * {
    box-sizing: border-box;
  }
`