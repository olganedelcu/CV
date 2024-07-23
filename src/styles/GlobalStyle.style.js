import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    transition: background 0.3s, color 0.3s;
  }

  a {
    color: ${({ theme }) => theme.linkColor};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

`;
