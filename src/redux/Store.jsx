/// this store the data 

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ImagesSlice from "./slices/Images.slice";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import { persistStore, persistReducer } from 'redux-persist'
import { version } from "react";

 const config ={
    key:"root",
    version:1,
    storage:storage
 }

 const slices =combineReducers({
    ImagesSlice:ImagesSlice
 })
const store=configureStore({
    reducer:persistReducer(config,slices),
    devTools:true,
    middleware:(setup)=>setup({
        serializableCheck:false
    })
});

export default store;
