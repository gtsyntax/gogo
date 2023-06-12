import { createSlice } from "@reduxjs/toolkit"
import orders from "../util/orders.json"

const initialState = {
    orderList: [...orders]
}

const orderSlice = createSlice({
    name: "orders",
    initialState
})

export default orderSlice.reducer