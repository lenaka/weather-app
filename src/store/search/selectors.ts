import { createSelector } from 'reselect';

import { RootState } from '../index';

const getSearch = (state: RootState) => state?.search;

export const getCities = createSelector(
  [getSearch],
  storage => storage?.data
);

export const isCitiesLoading = createSelector(
  [getSearch],
  storage => storage?.loading
);

export const getWord = createSelector(
  [getSearch],
  storage => storage?.word
);

export const isCitiesLoaded = createSelector(
  [getSearch],
  storage => storage?.loaded
);

export const getCitiesError = createSelector(
  [getSearch],
  storage => storage?.error
);
