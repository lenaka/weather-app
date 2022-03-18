import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';

import { actions } from './slice';
import { getCityUrl } from '../../utils/url';
import { CitiesRes } from '../../types/city';
import { normalizeCitiesData } from './normalize';

function* loadDataSaga(action: PayloadAction<string>) {
  try {
    const { payload: search } = action;

    if (!search) {
      return;
    }

    const result: {
      data: CitiesRes,
    } = yield axios.get(getCityUrl(search));

    yield put(actions.fetchCitiesSuccess(normalizeCitiesData(result?.data)));
  } catch (err) {
    yield put(actions.fetchCitiesFailed(err));
  }
}

export function* rootSaga() {
  yield takeLatest(actions.fetchCities, loadDataSaga);
}
