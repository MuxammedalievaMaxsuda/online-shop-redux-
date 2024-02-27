import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products: [],
    isLoading: false,
    selectProducts: []
}

const ProductSlice=createSlice({
    name: 'product',
    initialState,
    reducers:{
       fetchingProduct(state){
        state.isLoading= true
       } ,
       fetchedProduct(state, action){
        state.isLoading=false,
        state.products=action.payload
       },
       fetchedErrorProduct(state){
        state.isLoading=false
       },
       setSelectProduct(state, action){
        state.selectProducts=action.payload
       }
    }
})

export const {fetchingProduct, fetchedProduct, fetchedErrorProduct,setSelectProduct}=ProductSlice.actions
export default ProductSlice.reducer