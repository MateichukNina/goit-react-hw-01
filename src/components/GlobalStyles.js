import { createGlobalStyle } from 'styled-components';
// import 'modern-normalize';

export const GlobalStyles = createGlobalStyle`


body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: aliceblue;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  
  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 150px;
    margin-top: 100px;
  }

  
  .status {
    background-color: red;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    display: block;
  }
  
  .status.online {
    background-color: green;
  }


  .dark-row {
    background-color: #ecf2f4;
    line-height: 40px;
    text-transform: capitalize;
    color: #808080;
  }
  
  .dark-row:nth-child(2n) {
    background-color: #fff;
  }
  
`