import { createSlice } from '@reduxjs/toolkit';

import { Weather } from '../../types/weather';
import { isCoordsEqual } from '../../utils/weather';

type State = {
  data: Weather[],
  loading: boolean,
  error: string | null,
};

const initialState: State = {
  data: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'weather',

  initialState,

  reducers: {
    removeWeatherCity: (state, action) => {
      state.data = state.data.filter((weather) => !isCoordsEqual(weather.coords, action.payload));
    },
    fetchWeatherCity: {
      reducer: state => ({
        ...state,
        loading: true,
        error: initialState.error,
      }),
      prepare: payload => ({
        payload,
      }),
    },
    fetchWeatherCitySuccess: (state, action) => {
      const old = state.data.findIndex(item => isCoordsEqual(item.coords, action.payload.coords));

      if (old >= 0) {
        state.data[old] = action.payload;
      } else {
        state.data = [
          ...state.data,
          action.payload,
        ];
      }
      state.loading = false;
    },
    fetchWeatherCityFailed: (state, action) => ({
      ...state,
      loading: false,
      error: JSON.stringify(action.payload || null),
    }),
  }
});

export const { name, actions, reducer } = slice;
