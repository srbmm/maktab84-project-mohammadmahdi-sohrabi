import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice.jsx'
import cardSlice from './cardSlice.jsx'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        card: cardSlice,
    },
})