import { createSelector } from 'reselect';

import { RootState } from '../index';

const getCommon = (state: RootState) => state?.common;

export const isSearchResultOpened = createSelector(
  [getCommon],
  storage => storage?.isSearchResultOpened
);
