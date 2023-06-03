import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IWishlistSliceState } from './types';
import { Sneaker } from '../../types/types';

const initialState: IWishlistSliceState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist(state, action: PayloadAction<Sneaker>) {
      const findItems = state.items.find((obj) => obj.id === action.payload.id);

      if (!findItems) {
        state.items.push({ ...action.payload });
      }
    },
    removeFromWishlist(state, action: PayloadAction<number>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
