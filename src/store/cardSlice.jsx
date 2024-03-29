import {createSlice} from '@reduxjs/toolkit'

let cardDataStorage = JSON.parse(localStorage.getItem('card'))
if (!cardDataStorage) {
    cardDataStorage = []
    localStorage.setItem('card', JSON.stringify(cardDataStorage))
}
const initialState = {
    products: cardDataStorage,
    paid: false,
    postalNumber: "",
    telephoneNumber: "",
    date: "",
    name: "",
    address: ""
}

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const finded = state.products.find(item => item.id === action.payload.id)
            if (!finded) state.products.push({id: action.payload.id, number: action.payload.number})
            else finded.number += action.payload.number
            localStorage.setItem('card', JSON.stringify(state.products))
        },
        changeItemNumber: (state, action) => {
            state.products = state.products.filter(item => item.id !== action.payload.id)
            state.products.push({id: action.payload.id, number:action.payload.number})
            localStorage.setItem('card', JSON.stringify(state.products))
        },
        removeItem: (state, action) => {
            state.products = state.products.filter(item => item.id !== action.payload)
            localStorage.setItem('card', JSON.stringify(state.products))
        },
        postalNumberChange: (state, action) => {
            state.postalNumber = action.payload
        },
        telephoneNumberChange: (state, action) => {
            state.telephoneNumber = action.payload
        },
        dateChange: (state, action) => {
            state.date = action.payload
        },
        nameChange: (state, action) => {
            state.name = action.payload
        },
        addressChange: (state, action) => {
            state.address = action.payload
        },
        payCard: (state) => {
            state.paid = true
        },
        reset: (state) => {
            state.products = []
            state.postalNumber = ""
            state.telephoneNumber = ""
            localStorage.setItem('card', JSON.stringify([]))
        },
        resetPay: (state) => {
            state.paid = false
        }
    },
})

export const {addItem, removeItem, reset, telephoneNumberChange, postalNumberChange, payCard,resetPay, changeItemNumber, dateChange, nameChange, addressChange} = cardSlice.actions

export default cardSlice.reducer