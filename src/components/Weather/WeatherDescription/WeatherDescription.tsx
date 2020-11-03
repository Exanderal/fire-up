import React, { FC, useContext } from "react";
import WeatherContext from "../../../context/WeatherContext";

import WeatherForm from "../WeatherForm";

import {
  TemperatureHeading,
  TemperatureWrapper,
  WeatherContainer,
  WeatherIcon,
} from "./style";

import TempIcon from "../../../images/weather/thermometer.png";
import WindIcon from "../../../images/weather/wind.png";
import HumidityIcon from "../../../images/weather/humidityIcon.png";

type Props = {
  getWeatherData: () => {};
};

const WeatherDescription: FC<Props> = ({ getWeatherData }) => {
  const { weatherData } = useContext(WeatherContext);
  const {
    main: { temp, feels_like, humidity },
    wind: { speed },
  } = weatherData;
  return (
    <WeatherContainer maxWidth="md">
      <TemperatureWrapper>
        <TemperatureHeading>
          <WeatherIcon src={TempIcon} />
          Temp - {temp}&#8451;
        </TemperatureHeading>
        <TemperatureHeading>
          <WeatherIcon src={TempIcon} />
          Feels like - {feels_like}&#8451;
        </TemperatureHeading>
      </TemperatureWrapper>
      <TemperatureWrapper>
        <TemperatureHeading>
          <WeatherIcon src={WindIcon} />
          Wind Speed - {speed} m/s
        </TemperatureHeading>
        <TemperatureHeading>
          <WeatherIcon src={HumidityIcon} />
          Humidity - {humidity}%
        </TemperatureHeading>
      </TemperatureWrapper>
      <WeatherForm getWeatherData={getWeatherData} />
    </WeatherContainer>
  );
};

export default WeatherDescription;
