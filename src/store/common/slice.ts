import { createSlice } from '@reduxjs/toolkit';

type State = {
  isSearchResultOpened: boolean,
};

const initialState: State = {
  isSearchResultOpened: false,
};

const slice = createSlice({
  name: 'common',

  initialState,

  reducers: {
    setResultSearchOpened: (state, action) => {
      state.isSearchResultOpened = action.payload;
    },
  }
});

export const { name, actions, reducer } = slice;
