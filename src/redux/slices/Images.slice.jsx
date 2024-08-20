import { createSlice } from "@reduxjs/toolkit";

// this is main reducer file  memories this file

const imagesSlice =createSlice({
    name:'images',
    initialState:[],
    reducers:{
        addImage(state,action){
            state.push(action.payload)
        },
        removeImage(state,action){
            state.splice(action.payload,1)
        },
        resetImage(state){
          return  state =[]
        }
    }

})

 export  const {addImage,removeImage,resetImage} = imagesSlice.actions
 export default imagesSlice.reducer