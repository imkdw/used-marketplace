import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', 'Noto Sans', sans-serif;
    color: #212121;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  #root {
    display: flex;
    justify-content: center;
  }

  input {
    border: none;
    outline: none;
    
    /* input 자동완성시 검정색 글씨 지정 */
    &:-webkit-autofill {
      box-shadow: 0 0 0 30px #fff inset;
      -webkit-text-fill-color: #000;
    }

    /* input 자동완성시 파란색 배경색 비활성화 */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
    }
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export default GlobalStyle;
