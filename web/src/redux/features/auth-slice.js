import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    user: null
}

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true,
            state.user = action.payload
        },
        assignUser: (state, action) => {
            state.user = action.payload
            state.isAuthenticated = true
        }
    }
})

export const { login, assignUser } = auth.actions
export default auth.reducer