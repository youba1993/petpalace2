import { configureStore } from '@reduxjs/toolkit';

import  userSlice  from './users/userSlice';

const store = configureStore({
    reducer: {
        users: userSlice,
    }
})

export default store;