import { createGlobalStyle } from 'styled-components';
import 'modern-normalize/modern-normalize.css';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin:0;
    font-family: ${p => p.theme.fonts.main};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.main};
    color: ${p => p.theme.colors.mainText};

    background-color: ${p => p.theme.colors.bgColorMain}; 
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: ${p => p.theme.space[0]}px;
  }
  ul {
      list-style: none;
      padding: ${p => p.theme.space[0]}px;
      margin: ${p => p.theme.space[0]}px;
  }
  img {
      display: block;
      max-width: 100%;
      height: auto;
  }
  a{
    text-decoration: none;
        color: inherit;
  }
  button{
    cursor: pointer;
}
`;
