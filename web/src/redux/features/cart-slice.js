import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: null
}

export const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        assignCart: (state, action) => {
            state.cart = action.payload
        }
    }
})

export const {assignCart} = cart.actions
export default cart.reducer