import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

export const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        assignCart: (state, action) => {
            state.cart = action.payload
        },
        addToCart: (state, action) => {
            state.cart.push(action.payload)
        },
        removeFromCart: (state, action) => {
            state.cart = state.filter(item => item.id != action.payload)
        }
    }
})

export const {assignCart, addToCart, removeFromCart} = cart.actions
export default cart.reducer