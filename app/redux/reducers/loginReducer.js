import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    token: "",
    dataUser: {}
}

export const LoginReducer = createSlice({
    name: "AUTH",
    initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token
        },

        logout: (state) => {
            state.token = "",
            state.dataUser = {}
        },

        datauser: (state, action) => {
            state.token = state.token,
            state.dataUser = action.payload
        }
    }
})

export const { login, logout, datauser } = LoginReducer.actions
export default LoginReducer.reducer;