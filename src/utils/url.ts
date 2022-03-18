import { Coords } from '../types/city';

const CITIES_LIMIT = 5;

export const getWeatherApiUrl = (): string => {
  return process.env.REACT_APP_OPENWEATHERMAP_API_URL || '';
};

const getApiKey = (): string => {
  return process.env.REACT_APP_OPENWEATHERMAP_API_KEY || '';
};

export const getWeatherImgUrl = (img: string): string => {
  const imgTrail = process.env.REACT_APP_OPENWEATHERMAP_IMG_URL?.replace('%IMG%', img);
  return (process.env.REACT_APP_OPENWEATHERMAP_URL || '') + imgTrail;
};

export const getWeatherUrl = (coords: Coords): string => {
  const weatherTrail = process.env.REACT_APP_OPENWEATHERMAP_WEATHER_URL?.replace('%LAT%', String(coords.lat))
    .replace('%LON%', String(coords.lon))
    .replace('%API_KEY%', getApiKey());
  return getWeatherApiUrl() + weatherTrail;
};

export const getCityUrl = (search: string): string => {
  const cityTrail = process.env.REACT_APP_OPENWEATHERMAP_CITIES_URL?.replace('%CITY%', search)
    .replace('%LIMIT%', String(CITIES_LIMIT)).replace('%API_KEY%', getApiKey());
  return getWeatherApiUrl() + cityTrail;
};
