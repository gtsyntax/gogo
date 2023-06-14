import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth-slice"
import shopReducer from "./features/shop-slice"
import cartReducer from "./features/cart-slice"

export const store = configureStore({
    reducer: {
        authReducer,
        shopReducer,
        cartReducer,
    }
})