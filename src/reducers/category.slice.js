import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoading: false,
    categories: []
}


const CategorySlice=createSlice({
    name: 'category',
    initialState,
    reducers:{
        fetchingCategories(state){
            state.isLoading=true
        },
        fetchedCategories(state,action){
            state.isLoading=false,
            state.categories=action.payload
        },
        fetchedErrorCategories(state){
            state.isLoading=false
        },
    }
})

export const {fetchingCategories, fetchedCategories, fetchedErrorCategories}=CategorySlice.actions
export default CategorySlice.reducer

