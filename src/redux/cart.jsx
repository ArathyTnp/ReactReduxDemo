import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cartList: [],
  cartcount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state) => {
      state.cartcount = 1;
    },
    increment: (state) => {
      state.cartcount += 1;
    },
    decrement: (state) => {
      if (state.cartcount > 0) {
        state.cartcount -= 1;
      }
    },
  },
});

export const { increment, decrement, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
