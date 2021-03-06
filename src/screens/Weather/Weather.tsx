import React, { FC, useContext, useEffect, useState } from "react";
import { IWeather } from "../../interfaces/IWeather";
import { getCurrentWeather } from "../../rest/weather";
import WeatherContext from "../../context/WeatherContext";
import { REQUEST_STATUS } from "../../utils/requestStatus";

import Navbar from "../../components/layout/Navbar";
import Description from "../../components/Weather/WeatherDescription";
import WeatherForm from "../../components/Weather/WeatherForm";
import WeatherImage from "../../components/Weather/WeatherImage";
import Modal from "../../components/Modal";
import Loader from "../../components/Loader";

import { WeatherContainer, Wrapper, ImageText, ImageTextRight } from "./style";

const Weather: FC = () => {
  const {
    weatherData,
    setWeatherData,
    color,
    searchedCity,
    setSearchedCity,
  } = useContext(WeatherContext);
  const [modalShown, setModalShown] = useState(false);
  const [weatherReqStatus, setWeatherReqStatus] = useState({
    status: REQUEST_STATUS.NONE,
    message: "",
  });

  const getWeatherData = async (city: string) => {
    setWeatherReqStatus({
      status: REQUEST_STATUS.PENDING,
      message: "",
    });
    try {
      const data: IWeather = await getCurrentWeather(city);
      setSearchedCity(city);
      setModalShown(false);
      setWeatherData(data);
      setWeatherReqStatus({
        status: REQUEST_STATUS.SUCCESS,
        message: "",
      });
    } catch (err) {
      setWeatherReqStatus({
        status: REQUEST_STATUS.FAILED,
        message: err,
      });
    }
  };

  useEffect(() => {
    if (weatherReqStatus.status === REQUEST_STATUS.FAILED) {
      setModalShown(true);
    }
  }, [weatherReqStatus]);

  useEffect(() => {
    if (weatherData.main) {
      setWeatherReqStatus({
        status: REQUEST_STATUS.SUCCESS,
        message: "",
      });
    }
  }, [weatherData]);

  return (
    <Wrapper>
      <Modal
        heading="Error"
        text={weatherReqStatus.message.toString()}
        modalShown={modalShown}
        setModalShown={setModalShown}
      />
      <Navbar active="weather" />
      {weatherReqStatus.status === REQUEST_STATUS.NONE ||
      weatherReqStatus.status === REQUEST_STATUS.FAILED ? (
        <>
          <WeatherImage />
          <WeatherContainer maxWidth="md">
            <h2>
              Seems like you you didn't specify city yet. Go ahead and write
              your city in input next to this text.
            </h2>
            <WeatherForm getWeatherData={getWeatherData} />
          </WeatherContainer>
        </>
      ) : weatherReqStatus.status === REQUEST_STATUS.PENDING ? (
        <Loader />
      ) : (
        <>
          <WeatherImage>
            <ImageText color={color}>
              Weather: {weatherData.weather[0].main}
            </ImageText>
            <ImageTextRight color={color}>City: {searchedCity}</ImageTextRight>
          </WeatherImage>
          <Description getWeatherData={getWeatherData} />
        </>
      )}
    </Wrapper>
  );
};

export default Weather;
