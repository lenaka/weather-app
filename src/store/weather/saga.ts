import { put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { actions } from './slice';
import { getWeatherUrl } from '../../utils/url';
import { normalizeWeatherData } from './normalize';
import { WeatherRes } from '../../types/weather';
import { Coords } from '../../types/city';

function* loadDataSaga(action: PayloadAction<Coords>) {
  try {
    const { payload: coords } = action;

    if (!coords.lat || !coords.lon) {
      return;
    }

    const result: {
      data: WeatherRes,
    } = yield axios.get(getWeatherUrl(coords));

    yield put(actions.fetchWeatherCitySuccess(normalizeWeatherData(coords, result?.data)));
  } catch (err) {
    yield put(actions.fetchWeatherCityFailed(err));
  }
}

export function* rootSaga() {
  yield takeEvery(actions.fetchWeatherCity, loadDataSaga);
}
