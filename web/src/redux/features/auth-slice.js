import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"))

const initialState = {
    isAuthenticated: user ? true : false,
    user: user ? user : null
}

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true,
            state.user = action.payload
        }
    }
})

export const { login } = auth.actions
export default auth.reducer