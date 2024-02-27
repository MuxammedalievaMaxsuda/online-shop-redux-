import { AiOutlineClose } from "react-icons/ai"; 
import { AiOutlineMinus } from "react-icons/ai"; 
import { AiOutlinePlus } from "react-icons/ai"; 
import { Card, CardBody, IconButton, Typography } from '@material-tailwind/react'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { decrementBasketItem, deleteBasketItem, setBasketItem } from "../reducers/basket.slice";

const BasketCardItem = ({item}) => {

  const {countBasketItem}=useSelector(state=>state.basket)
  const count=countBasketItem.filter(countItem=>countItem.id==item.id).length
  const dispatch=useDispatch()
  return (
    <div className=' relative flex justify-between items-center gap-2  p-[10px] my-2 shadow-md border rounded-md'>
        <div className='flex justify-center items-center gap-2'>
            <img src={item.image} alt="" className='w-[200px] h-[150px] object-contain border rounded-sm p-2' />
            <div className=''>
                <Typography className='font-bold'>{item.title}</Typography>
                <Typography>price : {item.price} $</Typography>
            </div>
        </div>
        <div>
         <div className="flex justify-center items-center gap-1 p-2 border rounded-full">
              <IconButton onClick={()=>dispatch(setBasketItem(item))}  variant="outlined" size="sm" color="blue" className="rounded-full">
                <AiOutlinePlus />    
              </IconButton>
              <span>{count}</span>
              <IconButton onClick={()=>count>1 ? dispatch(decrementBasketItem(item)) : ''} variant="outlined" size="sm" color="blue" className="rounded-full">
                <AiOutlineMinus />
              </IconButton>
         </div>
        </div>
        <div className="absolute top-1 right-1">
          <IconButton onClick={()=>dispatch(deleteBasketItem(item))} className="founded-md" variant="text" size="sm">
            <AiOutlineClose  className="text-[18px]"/>
          </IconButton>
        </div>
    </div>
  )
}

export default BasketCardItem