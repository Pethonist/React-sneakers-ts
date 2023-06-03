import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import sneakersSlice from './Sneakers/sneakersSlice';
import filterSlice from './Filter/filterSlice';
import cartSlice from './Cart/cartSlice';
import wishlistSlice from './Wishlist/wishlistSlice';

export const store = configureStore({
  reducer: {
    sneakersSlice,
    filterSlice,
    cartSlice,
    wishlistSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
