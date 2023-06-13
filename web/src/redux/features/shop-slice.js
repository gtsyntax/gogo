import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shop: null
}

export const shop = createSlice({
    name: "shop",
    initialState,
    reducers: {
        assignShop: (state, action) => {
            state.shop = action.payload
        }
    }
})

export const {assignShop} = shop.actions
export default shop.reducer