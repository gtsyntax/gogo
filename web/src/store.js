import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/auth"
import cartReducer from "./slices/cart"
import restaurantReducer from "./slices/restaurants"
import orderReducer from "./slices/order"
import menuReducer from "./slices/menu"
import messageReducer from "./slices/message"

const reducer = {
    auth: authReducer,
    cart: cartReducer,
    restaurant: restaurantReducer,
    order: orderReducer,
    menu: menuReducer,
    message: messageReducer
}

export const store = configureStore({
    reducer: reducer,
    devTools: true
})