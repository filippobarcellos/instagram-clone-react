import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #FAFAFA;
    min-height: 100%;
  }

  button {
    cursor: pointer;
    outline: none;
  }

  input {
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-block-start: 0;
    margin-block-end: 0;
    padding: 0;
  }

  #root {
    --background: #FAFAFA;
    --white: #FFFFFF;
    --gray: #DBDBDB;
    --blue: #0095F6;
  }
`;
