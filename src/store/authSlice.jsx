import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: true,
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

export const { setTrue, setFalse } = authSlice.actions

export default authSlice.reducer