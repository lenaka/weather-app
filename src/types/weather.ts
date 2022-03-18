import { Coords } from './city';

export type WeatherItem = {
  id: number,
  main: string,
  description: string,
  icon: string,
};

export interface SysItemRes {
  type: number,
  id: number,
  message: number,
  country: string,
  sunrise: number,
  sunset: number,
}

export interface MainItemRes {
  temp: number,
  pressure: number,
  humidity: number,
  temp_min: number,
  temp_max: number,
}

export type WindItem = {
  speed: number,
  deg: number,
};

export interface WeatherRes {
  weather: WeatherItem[],
  base: string,
  main: MainItemRes,
  sys: SysItemRes,
  visibility: number,
  wind: WindItem,
  id: number,
  name: string,
}

export type Weather = Pick<WeatherRes, 'wind' | 'name'> & {
  temperature: MainItemRes['temp'],
  pressure: MainItemRes['pressure'],
  humidity: MainItemRes['humidity'],
  description: WeatherItem['description'],
  icon: WeatherItem['icon'],
  country: string,
  coords: Coords,
}
