export interface IWeather {
  weather: { main: string; description: string; icon: string }[];
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
}
