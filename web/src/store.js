import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/auth"
import addressReducer from "./slices/address"
import cartReducer from "./slices/cart"
import restaurantReducer from "./slices/restaurants"
import orderReducer from "./slices/order"
import menuReducer from "./slices/menu"
import messageReducer from "./slices/message"
import favoritesReducer from "./slices/favorites"
import reviewsReducer from "./slices/reviews"



const reducer = {
    auth: authReducer,
    address: addressReducer,
    cart: cartReducer,
    restaurant: restaurantReducer,
    order: orderReducer,
    menu: menuReducer,
    message: messageReducer,
    reviews: reviewsReducer,
    favorites: favoritesReducer,

}

export const store = configureStore({
    reducer: reducer,
    devTools: true
})