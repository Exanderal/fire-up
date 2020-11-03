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

import { WeatherContainer, Wrapper, ImageText, ImageTextRight } from "./style";

const Weather: FC = () => {
  const {
    city,
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

  const getWeatherData = async () => {
    setWeatherReqStatus({
      status: REQUEST_STATUS.PENDING,
      message: "",
    });
    try {
      const data: IWeather = await getCurrentWeather(city);
      setSearchedCity(city);
      setModalShown(false);
      setWeatherData(data);
      console.log("heresd");
      setWeatherReqStatus({
        status: REQUEST_STATUS.SUCCESS,
        message: "",
      });
    } catch (err) {
      console.log(err);
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
    //eslint-disable-next-line
  }, []);

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
        <div>Loading...</div>
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
