import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartSliceState } from './types';
import { CartItem } from '../../types/types';
import { calcTotalPrice } from '../../utils/calcTotalPrice';

const initialState: ICartSliceState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    // plusItem(state, action) {},
    // minusItem() {},
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
