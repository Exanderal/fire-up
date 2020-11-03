import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
::selection {
    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.white};
}
body {
    font-family: "Lato", sans-serif;
    line-height: 1.6;
    font-weight: 300;
    background-color: #f1f1f1;
}
ul {
    list-style-type: none;
}
a {
    text-decoration: none;
}
h1 {
    font-weight: 700;
}
h2 {
    font-weight: 400;
}
.menuShown {
    opacity: 1 !important;
  }
`;

export default GlobalStyle;
