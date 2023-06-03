import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilterSliceState } from './types';

const initialState: IFilterSliceState = {
  searchValue: '',
  currentPage: 1,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setSearchValue, setCurrentPage } = filterSlice.actions;
export default filterSlice.reducer;
