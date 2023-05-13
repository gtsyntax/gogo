import { createSlice } from "@reduxjs/toolkit"
import products from "../util/products.json"

const initialState = {
    productList: [...products],
    isLoading: true
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        increaseQty: (state, action) => {
            const productItem = state.productList.find((product) => product.uuid === action.payload.uuid)
            productItem.qty = productItem.qty + 1
        },
        decreaseQty: (state, action) => {
            const productItem = state.productList.find((product) => product.uuid === action.payload.uuid)
            if (productItem.qty > 0) {
                productItem.qty = productItem.qty - 1
            }
        }
    }
})

export const { increaseQty, decreaseQty } = productSlice.actions

const { reducer } = productSlice;
export default reducer