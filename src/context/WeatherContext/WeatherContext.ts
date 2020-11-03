import { createContext } from "react";
import { IWeatherContext } from "../../interfaces/IWeatherContext";

const WeatherContext = createContext({} as IWeatherContext);

export default WeatherContext;
