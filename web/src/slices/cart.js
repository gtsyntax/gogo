import { createSlice } from "@reduxjs/toolkit"
import cart from "../util/cart.json"

const initialState = {
    cartItems: [...cart],
    quantity: 0,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increaseQuatity: (state, {payload}) => {
            const menuItem = state.cartItems.find(item => item.itemId === payload.itemId)
            menuItem.quantity++
        },
        decreaseQuatity: (state, {payload}) => {
            const menuItem = state.cartItems.find(item => item.itemId === payload.itemId)
            menuItem.quantity--
        },
        removeItem: (state, {payload}) => {
            state.cartItems = state.cartItems.filter(item => item.itemId !== payload.itemId)
        },
        updateTotal: (state) => {
            let quantity = 0
            let total = 0
            state.cartItems.forEach(item => {
                quantity += item.quantity
                total += item.quantity * item.price
            })
            state.quantity = quantity
            state.total = total
        }
    }
})

export const { increaseQuatity, decreaseQuatity, removeItem, updateTotal } = cartSlice.actions
export default cartSlice.reducer