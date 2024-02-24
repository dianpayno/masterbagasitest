import { createSlice } from "@reduxjs/toolkit";
import { WarehouseInterface } from "@/interface/Warehouse";

const initialState: { cartWH: WarehouseInterface[] } = {
  cartWH: [],
};

export const CheckoutWHslice = createSlice({
  name: "checkoutWH",
  initialState,
  reducers: {
    SAVE_SELECTEDWHITEMS: (state, action) => {
      state.cartWH = action.payload;
    },
  },
});

export const { SAVE_SELECTEDWHITEMS } = CheckoutWHslice.actions;
export default CheckoutWHslice.reducer;
