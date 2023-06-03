import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchSneakers } from './asyncActions';
import { ISneakersSliceState } from './types';
import { Sneaker, Status } from '../../types/types';

const initialState: ISneakersSliceState = {
  items: [],
  status: Status.LOADING,
};

const sneakersSlice = createSlice({
  name: 'sneakers',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSneakers.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchSneakers.fulfilled, (state, action: PayloadAction<Sneaker[]>) => {
      state.status = Status.SUCCESS;
      state.items = action.payload;
    });
    builder.addCase(fetchSneakers.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

// export const {} = sneakersSlice.actions;
export default sneakersSlice.reducer;
