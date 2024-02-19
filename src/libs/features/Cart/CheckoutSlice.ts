import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "@/interface/Cart";

const initialState: { cart: Cart[] } = {
  cart: [],
};

export const CheckoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    SAVE_SELECTEDITEMS: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { SAVE_SELECTEDITEMS } = CheckoutSlice.actions;
export default CheckoutSlice.reducer