import { createSlice } from "@reduxjs/toolkit"
import menus from "../util/menus.json"

const initialState = {
    menuList: [...menus],
    isLoading: true
}

const menuSlice = createSlice({
    name: "menus",
    initialState,
})

export default menuSlice.reducer