import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import WeatherContext from "./context/WeatherContext";
import { IWeather } from "./interfaces/IWeather";
import Clear from "./images/weather/clear.jpg";
import Main from "./screens/Main";
import Weather from "./screens/Weather";

function Router() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({} as IWeather);
  const [searchedCity, setSearchedCity] = useState("");
  const [mainPicture, setMainPicture] = useState(Clear);
  const [color, setColor] = useState("white");

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
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
