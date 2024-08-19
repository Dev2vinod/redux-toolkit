import { createSlice } from "@reduxjs/toolkit";

// this is main reducer file  memories this file

const imagesSlice =createSlice({
    name:'images',
    initialState:[],
    reducers:{
        addImage(state,action){
            state.push(action.payload)
        }
    }

})

 export  const {addImage} = imagesSlice.actions
 export default imagesSlice.reducer