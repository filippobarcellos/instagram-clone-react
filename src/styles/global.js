import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: #FAFAFA;
    min-height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.4rem;
  }

  button {
    cursor: pointer;
    outline: none;
    background: none;
    border: none;
    color: inherit;
    font-size: inherit;
  }

  input {
    outline: none;
  }

  svg {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-block-start: 0;
    margin-block-end: 0;
    padding: 0;
  }

  strong {
    color: var(--textStrong);
  }

  #root {
    --background: #FAFAFA;
    --white: #FFFFFF;
    --gray: #DBDBDB;
    --blue: #0095F6;
    --textGray: #8e8e8e;
    --textStrong: #262626;
  }
`;
