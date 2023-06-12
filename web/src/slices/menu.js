import { createSlice, nanoid } from "@reduxjs/toolkit"
import menus from "../util/menus.json"

const initialState = {
    menuList: [...menus],
    restaurantMenuList: [],
    isLoading: true
}

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        createMenu: {
            reducer: (state, action) => {
                state.restaurantMenuList.push(action.payload)
            },
            prepare: ({title, description, price, quantity}) => {
                const uuid = nanoid()
                return { payload: {uuid, title, description, price, quantity}}
            }
        }
    }
})

export const { createMenu } = menuSlice.actions;
export default menuSlice.reducer