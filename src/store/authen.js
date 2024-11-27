import { createSlice } from '@reduxjs/toolkit'

const initialAuthenState = { 
    isAuthen: false,
    usercode: 'usercode',
    permission: []
}
export const authenSlice = createSlice({
    name: 'authen',
    initialState: initialAuthenState,
    reducers: {
        login(state, action) {
            state.usercode = action.payload.usercode
        },
        logout(state) {
            state.isAuthen = false
        }
    }
})

export const authenActions = authenSlice.actions;