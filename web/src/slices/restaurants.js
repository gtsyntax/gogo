import { createSlice } from "@reduxjs/toolkit"
import restaurants from "../util/resturants.json"

const initialState = {
    restaurantList: [...restaurants]
}

const restaurantSlice = createSlice({
    name: "restaurants",
    initialState,
    reducers: {

    }
})

const { reducer } = restaurantSlice
export default reducer