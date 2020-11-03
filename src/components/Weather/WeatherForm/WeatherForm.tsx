import React, { useContext, FC } from "react";
import WeatherContext from "../../../context/WeatherContext";
import { FormWrapper, WeatherBtn, WeatherInput } from "./style";

type Props = {
  getWeatherData: () => {};
};

const WeatherForm: FC<Props> = ({ getWeatherData }) => {
  const { city, setCity } = useContext(WeatherContext);
  return (
    <FormWrapper onSubmit={getWeatherData}>
      <WeatherInput
        placeholder="City"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setCity(e.target.value);
        }}
        value={city}
      />
      <WeatherBtn>Search</WeatherBtn>
    </FormWrapper>
  );
};

export default WeatherForm;
