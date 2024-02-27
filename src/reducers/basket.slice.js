import { createSlice } from "@reduxjs/toolkit"

const initialState={
    basket:[],
    countBasketItem: [],
    price: 0
}

const basketSlice=createSlice({
    name: 'basket',
    initialState,
    reducers:{
        setBasketItem(state,action){
           if(state.basket.find(item=>item.id==action.payload.id)){
             state.countBasketItem=[{id:action.payload.id,price: action.payload.price },...state.countBasketItem]
           } else{
            state.basket=[...state.basket, action.payload]
            state.countBasketItem=[{id:action.payload.id,price: action.payload.price },...state.countBasketItem]
           }
           state.price+=action.payload.price
        },
        deleteBasketItem(state,action){
            const count=state.countBasketItem.filter(item=>item.id===action.payload.id).length
            state.basket=state.basket.filter(item=>item.id!==action.payload.id)
            state.countBasketItem=state.countBasketItem.filter(item=>item.id!==action.payload.id)
            state.price-=action.payload.price*count
        },
        decrementBasketItem(state, action){
            const index=state.countBasketItem.findIndex(item=>item.id==action.payload.id)
            state.countBasketItem.splice(index,1)
            state.price-=action.payload.price
        },
        
    }
})

export const {setBasketItem,deleteBasketItem,decrementBasketItem}=basketSlice.actions
export default basketSlice.reducer