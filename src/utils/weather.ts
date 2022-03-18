import { Coords } from '../types/city';

const WEATHER_LIST_PARAM = 'weather-list';

const saveStoredList = (list: Coords[]) => {
  localStorage.setItem(WEATHER_LIST_PARAM, JSON.stringify(list));
};

export const addStoredWeather = (coords: Coords) => {
  const list = getStoredWeatherList();
  saveStoredList([ ...list, coords ]);
};

export const removeStoredWeather = (coords: Coords) => {
  const list = getStoredWeatherList();
  saveStoredList(list.filter((item: Coords) => !isCoordsEqual(item, coords)));
};

export const getStoredWeatherList = () => {
  const listStr = localStorage.getItem(WEATHER_LIST_PARAM);
  return listStr ? JSON.parse(listStr) : [];
};

export const isCoordsEqual = (c1: Coords, c2: Coords) => {
  return c1.lat === c2.lat && c1.lon === c2.lon;
};
