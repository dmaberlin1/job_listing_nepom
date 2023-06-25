import {createSlice} from "@reduxjs/toolkit";

const positionSlice=createSlice({
    name:'@@position',
    initialState:[],
    reducers:{
        addPosition:(_,action)=>action.payload,
    },
})

export const {addPositions}=positionSlice.actions;
export const positionReducer=positionSlice.reducer;

