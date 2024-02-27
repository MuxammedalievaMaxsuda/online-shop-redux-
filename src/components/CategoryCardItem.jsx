import { Card, CardBody, Typography, useSelect } from '@material-tailwind/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectProduct } from '../reducers/product.slice'
import { useSearchParams } from 'react-router-dom'

const CategoryCardItem = ({item}) => {
  
  const dispatch=useDispatch()
  const {products,selectProducts}=useSelector(state=>state.product)

  console.log(selectProducts)

  return (
    <Card className='cursor-pointer rounded-sm border active:scale-95'>
        <CardBody onClick={()=>dispatch(setSelectProduct(products.filter(proItem=> proItem.categoryId==item.id)))} className='flex justify-center items-center gap-2 max-h-[60px] p-[7px] min-w-[180px]'>
            <img src={item.image} className='w-[40px] h-[40px] rounded-sm object-cover'/>
            <Typography>
                {item.title}
            </Typography>
        </CardBody> 
    </Card>
  )
}

export default CategoryCardItem