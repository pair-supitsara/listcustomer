import { configureStore } from '@reduxjs/toolkit'
import { authenSlice } from './authen'

const store = configureStore({
    reducer: {
        authen: authenSlice.reducer,
    }
})

export const authenActions = authenSlice.actions

export default store;