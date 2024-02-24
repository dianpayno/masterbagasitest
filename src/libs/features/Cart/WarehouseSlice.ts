import { createSlice } from "@reduxjs/toolkit";
import { WarehouseInterface } from "@/interface/Warehouse";

const initialState: { warehouse:WarehouseInterface[]  } = {
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