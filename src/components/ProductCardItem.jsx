import { AiFillHeart } from "react-icons/ai"; 
import { AiOutlineHeart } from "react-icons/ai";  
import { Button, Card, CardBody, CardFooter, CardHeader, IconButton, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setFavouriteItem } from "../reducers/favourite.slice";
import { setBasketItem } from "../reducers/basket.slice";

const ProductCardItem = ({item}) => {
  const dispatch=useDispatch()
  const {favourite}=useSelector(state=>state.favourite)
  const [likeActive, setLikeActive]=useState(favourite.find(favItem=>favItem.id==item.id)? true : false)
 
  return (
    <Card className="max-w-[350px] cursor-pointer flex justify-between group gap-3 flex-col border rounded-sm">
      <CardBody className='p-[10px]'>
      <div className="overflow-hidden  rounded-sm border p-3">
        <img
            src={item.image}
            alt="card-image"
            className=" w-full h-full min-h-[200px] max-h-[200px] object-contain transition duration-300 group-hover:scale-110"
          />
      </div>
        <div className="absolute top-2 right-2">
            <IconButton onClick={()=>{setLikeActive(!likeActive),dispatch(setFavouriteItem(item))}} color="white" className="rounded-full bg-black bg-opacity-20" size="sm" variant="outlined">
               {likeActive?<AiFillHeart className="text-[red] text-[18px]"/> : <AiOutlineHeart className="text-[18px]"/>}
            </IconButton>
        </div>
        <div className="mt-2 flex flex-col gap-1 justify-between">
          <Typography color="blue-gray" className="font-semibold text-[15px] text-gray-800">
            {item.title}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            {item.price}$
          </Typography>
        </div>
       
      </CardBody>
      <CardFooter className="p-[10px]">
        <Button
          ripple={false}
          size="sm"
          onClick={()=>dispatch(setBasketItem(item))}
          className="bg-blue-500 rounded-sm float-right text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>

  )
}

export default ProductCardItem