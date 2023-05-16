import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    cartQuantity: 0,
    total: 0,
    exist: {},
  },
  reducers: {
    addCart: (state, action) => {
      // console.log(action.payload);
      state.exist = state.products.find((product) => {
        return product._id === action.payload._id;
      });

      state.exist &&
        state.products.map((product) =>
          product._id === state.exist._id
            ? {
                ...product,
                quantity: (product.quantity += state.exist.quantity),
              }
            : product
        );
      // console.log(exist);
      // console.log(state.products);
      if (!state.exist) {
        state.cartQuantity += 1;
        state.products.push(action.payload);
      }
      state.total += action.payload.price * action.payload.quantity;
    },
    clearCart: (state, action) => {
      state.products = [];
      state.cartQuantity = 0;
      state.total = 0;
    },
  },
});

export const { addCart, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
