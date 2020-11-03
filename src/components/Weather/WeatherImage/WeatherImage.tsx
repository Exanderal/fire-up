import React, { FC, useContext, useEffect } from "react";
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

  console.log("reloading");
  const [whiteColor, blackColor] = ["white", "black"];
  useEffect(() => {
    if (weatherData.main) {
      const mainWeather = weatherData.weather[0].main.toLowerCase();
      switch (mainWeather) {
        case WEATHER_STATUS.CLEAR:
          setWeatherImages(Clear, whiteColor);
          break;
        case WEATHER_STATUS.CLOUDS:
          setWeatherImages(Clouds, whiteColor);
          break;
        case WEATHER_STATUS.DUST:
          setWeatherImages(Dust, blackColor);
          break;
        case WEATHER_STATUS.HAZE:
          setWeatherImages(Haze, blackColor);
          break;
        case WEATHER_STATUS.MIST:
          setWeatherImages(Mist, whiteColor);
          break;
        case WEATHER_STATUS.RAIN:
          setWeatherImages(Rain, whiteColor);
          break;
        case WEATHER_STATUS.SAND:
          setWeatherImages(Sand, whiteColor);
          break;
        case WEATHER_STATUS.SNOW:
          setWeatherImages(Snow, whiteColor);
          break;
        case WEATHER_STATUS.DRIZZLE:
          setWeatherImages(Drizzle, whiteColor);
          break;
        default:
          setWeatherImages(Clear, whiteColor);
          break;
      }
    } //eslint-disable-next-line
  }, [weatherData]);

  return <ImageBackground image={mainPicture}>{children}</ImageBackground>;
};

export default WeatherImage;
