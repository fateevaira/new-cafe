import { configureStore } from '@reduxjs/toolkit';
import cart from './cartSlice';
import dishes from './dishesSlice';

export const store = configureStore({
    reducer: {
      dishes,
      cart
    },
  })