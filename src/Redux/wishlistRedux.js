import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    products: [],
    wishlistQuantity: 0,
    exist: {},
  },
  reducers: {
    addWishlist: (state, action) => {
      state.exist = state.products.find((product) => {
        return product._id === action.payload._id;
      });
      if (!state.exist) {
        state.wishlistQuantity += 1;
        state.products.push(action.payload);
      }
    },
  },
});

export const { addWishlist } = wishlistSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;
