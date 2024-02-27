import React, { useEffect, useState } from 'react'
import BasketCardItem from '../components/BasketCardItem'
import { Button, Card, CardBody, Typography } from '@material-tailwind/react'
import { useSelector } from 'react-redux'
import { BsFillBasket2Fill } from 'react-icons/bs'

const Basket = () => {
  const {basket,countBasketItem,price}=useSelector(state=>state.basket)
 
  console.log(price)
 
  
  return (
    <>
      {basket.length>0 ?
      <div className='flex gap-2 py-[20px] md:flex-row flex-col'>
      <div className='w-full'>
            {basket.map(item=>(
            <BasketCardItem item={item} key={item.id}/>
            ))}
      </div>
      <div className='mt-[8px] border flex justify-center items-center flex-col gap-2 shadow-md  p-2 rounded-sm md:w-[400px] h-[200px]'>
          <div className='flex justify-center items-center gap-1 flex-col border-b pb-1'>
            <Typography className='text-orange-500 font-semibold'>
              All products : {basket.length}
            </Typography>
            <Typography className='text-blue-500 font-bold text-[18px]'>
                All products price: {price} $
            </Typography>
          </div>
          <Button color='blue' size='sm' className='rounded-sm mt-4'>Order</Button>
      </div>
      </div> :
      <div className='flex text-gray-700 justify-center items-center flex-col gap-1 w-full h-[70vh]'>
        <div>
          <BsFillBasket2Fill className="text-[24px]"/>
        </div>
        <Typography>Basket product is not found!</Typography>
      </div>}
    </>
  )
}

export default Basket