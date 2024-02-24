import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from "./features/Cart/CheckoutSlice";
import warehouseReducer from "./features/Cart/WarehouseSlice";
import cartWHReducer from "./features/Cart/CheckoutWHslice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      warehouse: warehouseReducer,
      cartWH: cartWHReducer
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
