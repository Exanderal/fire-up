import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import WeatherContext from "./context/WeatherContext";
import { IWeather } from "./interfaces/IWeather";

import Main from "./screens/Main";
import Weather from "./screens/Weather";

import Clear from "./images/weather/clear.jpg";

function Router() {
  const [weatherData, setWeatherData] = useState({} as IWeather);
  const [searchedCity, setSearchedCity] = useState("");
  const [mainPicture, setMainPicture] = useState(Clear);
  const [color, setColor] = useState("white");

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
        mainPicture,
        setMainPicture,
        color,
        setColor,
        searchedCity,
        setSearchedCity,
      }}
    >
      <BrowserRouter>
        <Route component={Main} path="/" exact />
        <Route component={Weather} path="/weather" exact />
      </BrowserRouter>
    </WeatherContext.Provider>
  );
}

export default Router;
