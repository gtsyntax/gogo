import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    addressList: [],
    totalAddress: 0
}

const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {
        addAddress: {
            reducer: (state, {payload}) => {
                state.addressList.push(payload)
                state.totalAddress++
            }, 
            prepare: ({street, apartment, city, postalCode}) => {
                const id = nanoid()
                return {payload: {id, street, apartment, city, postalCode}}
            }
        },
        removeAddress: (state, {payload}) => {
            state.addressList = state.addressList.filter(address => address.id !== payload.id)
        }
    }
})

export const { addAddress, removeAddress } = addressSlice.actions
export default addressSlice.reducer