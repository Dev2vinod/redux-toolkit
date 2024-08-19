/// this store the data 

import { configureStore } from "@reduxjs/toolkit";
import ImagesSlice from "./slices/Images.slice";
const store=configureStore({
    reducer:{ ImagesSlice},
    devTools:true
});

export default store;
