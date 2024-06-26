import {createSlice} from '@reduxjs/toolkit';
// import type {RootState} from './store';

interface Fg {
  currentResults: object | null;
  pastResults: object[] | null;
}

const initialState: Fg = {
  currentResults: null,
  pastResults: null,
};

export const fgSlice = createSlice({
  name: 'fg',
  initialState,
  reducers: {
    // add reducer functions here
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = fgSlice.actions;
export default fgSlice.reducer;
export type {Fg};
