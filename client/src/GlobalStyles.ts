import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', 'Noto Sans', sans-serif;

  }

  body {
  }

  a {
    text-decoration: none;
  }

  input {
    border: none;
  }
`;

export default GlobalStyle;
