import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    productData:[],
    userInfo: null,
};

export const trendFusionSlice = createSlice({
    name: "trendFusion",
    initialState,
    reducers:{
       addToCart:(state, action)=>{
        const item = state.productData.find((item)=> item.id === (action.payload.id))
        if (item){
            item.quantity = action.payload.quantity     
        }
        else{
            state.productData.push(action.payload)
            }
       } 
    }
})

export const { addToCart } = trendFusionSlice.actions;
export default trendFusionSlice.reducer;