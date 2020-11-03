import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { StylesProvider } from "@material-ui/core";
import reportWebVitals from "./reportWebVitals";

import Router from "./Router";
import theme from "./theme";
import GlobalStyle from "./GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <GlobalStyle />
        <Router />
      </StylesProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
