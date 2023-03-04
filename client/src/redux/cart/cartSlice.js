import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    quantity: 0,
    total: 0,
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cartAdd: (state, action) => {
            state.items = [...action.payload],
            state.quantity = action.quantity ,
            state.total = action.price
        },
        cartRemove: (state, action) => {
            state.items = [...action.payload],
            state.quantity = action.quantity ,
            state.total = action.price
        }
    }
});

export const { cartAdd, cartRemove} = CartSlice.actions;

export const addToCart = (product) => (dispatch) => {
        
} 