import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`


  body {
    color: #000;
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    height: 100vh;
    margin: 0;
    overflow: hidden;
    padding: 0;
    text-rendering: optimizeLegibility;
    width: 100vw;
    -webkit-font-smoothing: antialiased;
  }



  @keyframes glow {
    0% {
      box-shadow: rgb(251, 251, 251) 0 0 0px;
    }
    100% {
      box-shadow: rgb(251, 251, 251) 0 10px 100px;
    }
  }
`;

export const Marginals = css`
  box-sizing: border-box;
  display: flex;
  pointer-events: none;
  position: fixed;
  width: 100vw;
  z-index: 1;
`;
