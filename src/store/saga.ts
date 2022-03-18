import { all } from 'redux-saga/effects';
import { rootSaga as searchSagas } from './search/saga';
import { rootSaga as weatherSagas } from './weather/saga';

export default function* rootSaga() {
  yield all([searchSagas(), weatherSagas()]);
}
