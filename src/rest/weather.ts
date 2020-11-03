import { weatherAxios } from "./axiosDefaults";
import { IWeather } from "../interfaces/IWeather";

const apiKey = `${process.env.REACT_APP_API_KEY}`;

export const getCurrentWeather = async (city: string) => {
  try {
    const response = await weatherAxios.get<IWeather>(
      `weather?appid=${apiKey}&q=${city}&units=metric`
    );
    return response.data;
  } catch (err) {
    if (err.response) {
      throw new Error(
        `${err.response.data.message}. Server responsed with status: ${err.response.data.cod}`
      );
    }
    throw new Error("Unidentified error");
  }
};
