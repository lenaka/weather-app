import { Weather, WeatherRes } from '../../types/weather';
import { Coords } from '../../types/city';

export const normalizeWeatherData = (coords: Coords, data: WeatherRes): Weather => {
  return {
    name: data.name,
    temperature: Math.round(data.main.temp),
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    wind: data.wind,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    country: data.sys.country,
    coords,
  };
};
