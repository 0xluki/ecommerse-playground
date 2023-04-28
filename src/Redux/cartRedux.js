import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    cartQuantity: 0,
    total: 0,
  },
  reducers: {
    addCart: (state, action) => {
      // console.log(action.payload);
      state.cartQuantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
