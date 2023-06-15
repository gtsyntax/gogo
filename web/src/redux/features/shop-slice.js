import { createSlice } from "@reduxjs/toolkit";


const restaurnats = [
    {
        "id": "ecad6f5c-6e21-4e32-98f3-1dd6d6c53d21",
        "name": "Delicious Bites",
        "minDeliveryFee": 15.99,
        "rating": 4.5
    },
    {
        "id": "a92e3c1a-8d1b-4f7e-ae5c-2b84f8e8be3d",
        "name": "Tasty Treats",
        "minDeliveryFee": 12.50,
        "rating": 4.2,
    },
    {
        "id": "b7e19f6c-2d7a-42d6-9eab-81f2014e95e8",
        "name": "Savory Delights",
        "minDeliveryFee": 9.99,
        "rating": 4.7
    },
    {
        "id": "f8c9de73-4a14-46e1-94e4-6d4e19a06cfd",
        "name": "Gourmet Grill",
        "minDeliveryFee": 18.00,
        "rating": 4.3
    },
    {
        "id": "d3ab8ed4-b726-434e-9e66-3d77d4f36767",
        "name": "Spice House",
        "minDeliveryFee": 14.99,
        "rating": 4.8
    }

]

const menus = [
    {
        "id": "873649c3-dae0-4f3e-b96c-354532fcd981",
        "name": "Classic Burger",
        "description": "Juicy beef patty with fresh lettuce, tomatoes, and cheddar cheese.",
        "price": 9.99,
        "shopId": "e5d92d7b-25d3-4df4-96c2-90cb5a3c6a19"
    },
    {
        "id": "c56eefc4-ba43-41b0-9fb0-20b12df33e1f",
        "name": "Margherita Pizza",
        "description": "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
        "price": 12.50,
        "shopId": "e5d92d7b-25d3-4df4-96c2-90cb5a3c6a19"
    },
    {
        "id": "b1e44e25-03fc-4629-8e14-78dce61c9cc3",
        "name": "Grilled Salmon",
        "description": "Grilled salmon fillet served with lemon butter sauce and steamed vegetables.",
        "price": 18.99,
        "shopId": "a9e5bf42-874d-4c07-aa18-f52a66f8d269"
    },
    {
        "id": "7dc5f682-ae46-4b9e-a3fc-56f7afef4707",
        "name": "Vegetable Pad Thai",
        "description": "Stir-fried rice noodles with mixed vegetables and tangy Pad Thai sauce.",
        "price": 10.99,
        "shopId": "a9e5bf42-874d-4c07-aa18-f52a66f8d269"
    },
    {
        "id": "e84a8555-17c7-4fbb-b3c9-75f0fb71057c",
        "name": "Chicken Tikka Masala",
        "description": "Tender chicken tikka cooked in a creamy tomato-based sauce, served with naan bread.",
        "price": 14.99,
        "shopId": "123af1d0-93a1-47df-8e84-167d55d49dd7"
    }    
]

const initialState = {
    shop: null,
    menus,
    shopList: restaurnats
}

export const shop = createSlice({
    name: "shop",
    initialState,
    reducers: {
        assignShop: (state, action) => {
            state.shop = action.payload
        },
        assignMenu: (state, action) => {
            state.menus = action.payload
        }
    }
})

export const {assignShop, assignMenu} = shop.actions
export default shop.reducer


