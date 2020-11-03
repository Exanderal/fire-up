import React, { FC, useContext } from "react";
import WeatherContext from "../../../context/WeatherContext";
import { WEATHER_STATUS } from "../../../utils/weatherStatus";
import { ImageBackground } from "./style";

import Clear from "../../../images/weather/clear.jpg";
import Clouds from "../../../images/weather/clouds.jpg";
import Dust from "../../../images/weather/dust.jpg";
import Haze from "../../../images/weather/haze.jpg";
import Mist from "../../../images/weather/mist.jpg";
import Rain from "../../../images/weather/rain.jpg";
import Sand from "../../../images/weather/sand.jpg";
import Snow from "../../../images/weather/snow.jpg";
import Drizzle from "../../../images/weather/drizzle.jpg";

const WeatherImage: FC = ({ children }) => {
  const { weatherData, mainPicture, setMainPicture, setColor } = useContext(
    WeatherContext
  );
  const setWeatherImages = (img: string, color: string) => {
    setMainPicture(img);
    setColor(color);
  };
  if (weatherData.main) {
    const mainWeather = weatherData.weather[0].main.toLowerCase();
    switch (mainWeather) {
      case WEATHER_STATUS.CLEAR:
        setWeatherImages(Clear, "white");
        break;
      case WEATHER_STATUS.CLOUDS:
        setWeatherImages(Clouds, "white");
        break;
      case WEATHER_STATUS.DUST:
        setWeatherImages(Dust, "black");
        break;
      case WEATHER_STATUS.HAZE:
        setWeatherImages(Haze, "black");
        break;
      case WEATHER_STATUS.MIST:
        setWeatherImages(Mist, "white");
        break;
      case WEATHER_STATUS.RAIN:
        setWeatherImages(Rain, "white");
        break;
      case WEATHER_STATUS.SAND:
        setWeatherImages(Sand, "white");
        break;
      case WEATHER_STATUS.SNOW:
        setWeatherImages(Snow, "white");
        break;
      case WEATHER_STATUS.DRIZZLE:
        setWeatherImages(Drizzle, "white");
        break;
      default:
        setWeatherImages(Clear, "white");
        break;
    }
  }
  return <ImageBackground image={mainPicture}>{children}</ImageBackground>;
};

export default WeatherImage;
