import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', 'Noto Sans', sans-serif;
  }

  a {
    text-decoration: none;
  }

  input {
    border: none;
    outline: none;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export default GlobalStyle;
