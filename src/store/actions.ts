import { actions as searchActions, name as searchName } from './search/slice';
import { actions as commonActions, name as commonName } from './common/slice';
import { actions as weatherActions, name as weatherName } from './weather/slice';

export const actions = {
  [searchName]: searchActions,
  [commonName]: commonActions,
  [weatherName]: weatherActions,
};
