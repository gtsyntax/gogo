import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import cart from "../util/cart.json"

export const getUserCartById = createAsyncThunk(
    "carts/getUserCartById",
    async (userId) => {
        const response = await fetch(`api/api/carts/by_user/${userId}`)
        const formattedResponse = await response.json()
        return formattedResponse
    }
)

// export const addItemToCart
// export const deleteItemFromCart


const initialState = {
    cartItems: [],
    quantity: 0,
    total: 0,
    isLoading: false
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
    },
    extraReducers: {
        [getUserCartById.pending]: (state) => {
            state.isLoading = true
        },
        [getUserCartById.fulfilled]: (state, {payload}) => {
            state.cartItems = payload
            state.isLoading = false 
        },
        [getUserCartById.rejected]: (state) => {
            state.isLoading = false
        }
    }
})

export const { increaseQuatity, decreaseQuatity, removeItem, updateTotal } = cartSlice.actions
export default cartSlice.reducer