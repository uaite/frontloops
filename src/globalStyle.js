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

    a {
      text-decoration: none;
      color: #f0f0f0;
      transition: 0.3s;

      :hover {
        color: #aaa;
      }

      :focus {
        outline: 0;
      }
    }
  }

  * {
    box-sizing: border-box;
  }
`