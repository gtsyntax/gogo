import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/auth"
import cartReducer from "./slices/cart"
import restaurantReducer from "./slices/restaurants"
import productReducer from "./slices/product"
import messageReducer from "./slices/message"

const reducer = {
    auth: authReducer,
    cart: cartReducer,
    restaurant: restaurantReducer,
    product: productReducer,
    message: messageReducer
}

export const store = configureStore({
    reducer: reducer,
    devTools: true
})