import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.palette.background.default};
  }
  a{
    color:${(props) => props.theme.palette.link.main};
    &:hover {
      color: ${(props) => props.theme.palette.link.hover};
    }
    &:active {
      color: ${(props) => props.theme.palette.link.active};
    }
    &:disabled {
      color: ${(props) => props.theme.palette.link.disabled};
    }
  }
`;

export default GlobalStyle;
