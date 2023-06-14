import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shop: null,
    menus: []
}

export const shop = createSlice({
    name: "shop",
    initialState,
    reducers: {
        assignShop: (state, action) => {
            state.shop = action.payload
        },
        assignMenu: (state, action) => {
            state.menus = action.payload
        }
    }
})

export const {assignShop, assignMenu} = shop.actions
export default shop.reducer