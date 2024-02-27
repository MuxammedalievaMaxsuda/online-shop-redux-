import { createSlice } from "@reduxjs/toolkit"

const initialState={
    favourite:[]
}

const favouriteSlice=createSlice({
    name: 'favourite',
    initialState,
    reducers:{
        setFavouriteItem(state,action){
           if(state.favourite.find(item=>item.id==action.payload.id)){
            state.favourite=state.favourite.filter(item=>item.id!=action.payload.id)
           } else{
            state.favourite=[action.payload, ...state.favourite]
           }
        }
    }
})

export const {setFavouriteItem}=favouriteSlice.actions
export default favouriteSlice.reducer