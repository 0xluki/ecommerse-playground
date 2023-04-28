import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartRedux";
import { wishlistReducer } from "./wishlistRedux";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});
