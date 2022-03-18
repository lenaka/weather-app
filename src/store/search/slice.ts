import { createSlice } from '@reduxjs/toolkit';

import { Cities } from '../../types/city';

type State = {
  data: Cities,
  loading: boolean,
  loaded: boolean,
  error: string | null,
  word: string | null,
};

const initialState: State = {
  data: [],
  loading: false,
  loaded: false,
  error: null,
  word: null,
};

const slice = createSlice({
  name: 'search',

  initialState,

  reducers: {
    setWord: (state, action) => {
      state.word = action.payload;
    },
    removeCity: (state, action) => {
      state.data = state.data.filter((city) =>
        (city.lat !== action.payload.lat && city.lon !== action.payload.lat)
      );
    },
    fetchCities: {
      reducer: state => ({
        ...state,
        data: initialState.data,
        loading: true,
        loaded: initialState.loaded,
        error: initialState.error,
      }),
      prepare: payload => ({
        payload,
      }),
    },
    fetchCitiesSuccess: (state, action) => ({
      ...state,
      data: action.payload,
      loading: false,
      loaded: true,
    }),
    fetchCitiesFailed: (state, action) => ({
      ...state,
      loading: false,
      loaded: true,
      error: JSON.stringify(action.payload || null),
    }),
  }
});

export const { name, actions, reducer } = slice;
