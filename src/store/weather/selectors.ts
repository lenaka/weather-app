import { createSelector } from 'reselect';

import { RootState } from '../index';
import { Coords } from '../../types/city';
import { Weather } from '../../types/weather';
import { isCoordsEqual } from '../../utils/weather';

const getWeather = (state: RootState) => state?.weather;

export const getWeatherList = createSelector(
  [getWeather],
  storage => storage?.data
);

export const isWeatherLoading = createSelector(
  [getWeather],
  storage => storage?.loading
);

export const geWeatherError = createSelector(
  [getWeather],
  storage => storage?.error
);

export const getWeatherByCoords = (coords: Coords) => createSelector(
  [getWeather],
  (storage) => storage.data.filter((item: Weather) => isCoordsEqual(item.coords, coords))[0]
);
