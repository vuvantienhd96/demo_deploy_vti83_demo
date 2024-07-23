import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './feature/counter/counterSlice';
import cartSlice from './feature/counter/cartSlice';

export default configureStore({
  reducer: {
    counter: counterSlice, // demo simple
    cart: cartSlice, // gio hang
  },
});
