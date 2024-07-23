import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    // gia tri state khoi tao
    value: 9,
    name: 'redux',
    initCity: 'test',
  },
  reducers: {
    // nhung function tinh toan thay doi hay cap nhap state
    tangItem: (state) => {
      state.value += 1; // update state
      state.name = 'kitty'; // update state
    },
    giamItem: (state) => {
      state.value -= 1;
      state.name = 'redux'; // update state
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { tangItem, giamItem, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
