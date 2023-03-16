import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setTrue: (state) => {
            state.value = true
        },
        setFalse: (state) => {
            state.value = false
        }
    },
})

// Action creators are generated for each case reducer function
export const { setTrue, setFalse } = authSlice.actions

export default authSlice.reducer