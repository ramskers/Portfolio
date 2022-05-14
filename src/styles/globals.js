import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

@media screen and (max-width: 768px) {
  picture {
    width: 60px;
    height: 60px;
  }
}

@media screen and (max-width: 640px) {
  picture {
    width: 60px;
    height: 60px;
  }
}

@media screen and (min-width: 768px) {
  .techScreen {
    height: 100vh;
  }
}

`;

export default GlobalStyles;
