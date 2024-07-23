import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartTotal: [], // length = 0
    flagBell: false,
  },
  reducers: {
    resetBell: (state) => {
      state.flagBell = false;
    },
    buyItem: (state, action) => {
      console.log(action.payload, 'action.payload');
      state.cartTotal.push(action.payload);
      state.flagBell = true;
    },
    sellItem: (state) => {},
    incrementByAmount: (state, action) => {
      // state.value += action.payload;
    },
    deleteItem: (state, action) => {
      const index = action;
      console.log(index, 'index');
      state.cartTotal.splice(index, 1); // xoa vi tri index va 1 phan tu
    },
  },
});

// Action creators are generated for each case reducer function
export const { buyItem, deleteItem, sellItem, incrementByAmount, resetBell } =
  cartSlice.actions;

export default cartSlice.reducer;
