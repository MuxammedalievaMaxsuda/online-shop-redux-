import { BsFillBasket2Fill } from "react-icons/bs"; 
import React from 'react'
import { useSelector } from 'react-redux'
import ProductCardItem from '../components/ProductCardItem'
import { Typography } from '@material-tailwind/react'

const Favourite = () => {
  const {favourite}=useSelector(state=>state.favourite)
  return (
    <>
      {favourite.length>0?
      <div className="sm:flex sm:justify-center md:block">
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-3'>
        {
            favourite.map(item=>(
              <ProductCardItem key={item.id} item={item}/>
            )) 
        }
        </div>
      </div>:
      <div className='flex text-gray-700  justify-center items-center flex-col gap-1 w-full h-[70vh]'>
        <div>
          <BsFillBasket2Fill className="text-[24px]"/>
        </div>
        <Typography>Favourite product is not found!</Typography>
      </div>}
    </>
  )
}

export default Favourite