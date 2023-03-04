import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    quantity: 0,
    price: 0,
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cartAdd: (state, action) => {
            state.items = [...action.payload],
            state.quantity = state.quantity+1 ,
            state.price = state.price + action.price
        }
    }
})