import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./screens/Main";
import Weather from "./screens/Weather";

function Router() {
  return (
    <BrowserRouter>
      <Route component={Main} path="/" exact />
      <Route component={Weather} path="/weather" />
    </BrowserRouter>
  );
}

export default Router;
