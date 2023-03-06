import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { cartReducer } from './cart/cartSlice';
import { userReducer } from './users/userSlice';

import storage from 'redux-persist/lib/storage';
import {  persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user']
}

const userPersistConfig = {
  key: 'user',
  storage,
  blacklist: ['error']
}

const rootReducer = combineReducers({
    user: persistReducer(userPersistConfig, userReducer),
    cart: cartReducer    
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)