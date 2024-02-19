import { createSlice } from "@reduxjs/toolkit";
import { WarehouseCart } from "@/interface/Warehouse";

const initialState: { warehouse: WarehouseCart[] } = {
    warehouse: [],
}

export const WarehouseSlice = createSlice({
    name: "warehouse",
    initialState,
    reducers:{
        SAVE_WAREHOUSEITEMS: (state, action) => {
            state.warehouse = action.payload
        }
    }
})

export const { SAVE_WAREHOUSEITEMS } = WarehouseSlice.actions
export default WarehouseSlice.reducer