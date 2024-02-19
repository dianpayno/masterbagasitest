import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from "./features/Cart/CheckoutSlice";
import warehouseReducer from "./features/Cart/WarehouseSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      warehouse: warehouseReducer
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
