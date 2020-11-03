import { IWeather } from "./IWeather";

export interface IWeatherContext {
  weatherData: IWeather;
  setWeatherData: React.Dispatch<React.SetStateAction<IWeather>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  mainPicture: string;
  setMainPicture: React.Dispatch<React.SetStateAction<string>>;
  searchedCity: string;
  setSearchedCity: React.Dispatch<React.SetStateAction<string>>;
}
