import React, { FC, useState } from "react";

import { FormWrapper, WeatherBtn, WeatherInput } from "./style";

type Props = {
  getWeatherData: (city: string) => {};
};

const WeatherForm: FC<Props> = ({ getWeatherData }) => {
  const [city, setCity] = useState("");

  return (
    <FormWrapper
      onSubmit={(e) => {
        e.preventDefault();
        getWeatherData(city);
      }}
    >
      <WeatherInput
        placeholder="City"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setCity(e.target.value);
        }}
        value={city}
      />
      <WeatherBtn type="submit">Search</WeatherBtn>
    </FormWrapper>
  );
};

export default WeatherForm;
