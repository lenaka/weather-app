import { combineReducers } from 'redux';
import { reducer as searchReducer, name as searchName } from './search/slice';
import { reducer as commonReducer, name as commonName } from './common/slice';
import { reducer as weatherReducer, name as weatherName } from './weather/slice';

export const rootReducer = combineReducers({
  [searchName]: searchReducer,
  [commonName]: commonReducer,
  [weatherName]: weatherReducer,
});
