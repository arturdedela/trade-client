import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #212121;
    color: #f6f6f6;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 12px;
  }
  
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  
  button {
    font-family: inherit;
  }
  
  * {
    box-sizing: border-box;
  }
`;
