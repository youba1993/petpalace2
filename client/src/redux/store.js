import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart/cartSlice';

import { userReducer } from './users/userSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer
    }
})

export default store;