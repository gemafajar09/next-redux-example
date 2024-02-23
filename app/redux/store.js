"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./reducers/loginReducer";


const rootReducer = combineReducers({
    login : LoginReducer
}, );

export const store = configureStore({
    reducer: rootReducer,
});