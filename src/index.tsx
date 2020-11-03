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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
