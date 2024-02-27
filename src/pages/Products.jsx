import { FaShoppingCart } from "react-icons/fa"; 
import React, { useEffect } from 'react'
import ProductCardItem from '../components/ProductCardItem'
import { getCategories, getProduct } from '../getData/getAxiosData'
import { useDispatch, useSelector } from 'react-redux'
import CategoryCardItem from '../components/CategoryCardItem'
import { Card, CardBody, Spinner, Typography, select } from '@material-tailwind/react'
import { setSelectProduct } from "../reducers/product.slice";

const Products = () => {

  const {products, isLoading:isProduct, selectProducts}=useSelector(state=>state.product)
  const {categories, isLoading:isCategory}=useSelector(state=>state.category)
  const dispatch=useDispatch()

  useEffect(()=>{
    getProduct('https://online-shop-database.onrender.com/products',dispatch)
    getCategories('https://online-shop-database.onrender.com/categories',dispatch)
  },[])
  
  return (
    <div className='flex justify-center flex-col gap-2'>
      <div className='flex px-3 gap-2  justify-start items-center overflow-x-auto min-h-[100px] border my-3'>
        {
          isCategory ? 
          <div className='flex items-center gap-2'>
           <Spinner color='blue'/>  Loading...
          </div>
          :
          <>
          <Card className='cursor-pointer rounded-sm border active:scale-95'>
            <CardBody onClick={()=>dispatch(setSelectProduct([]))} className='flex justify-center items-center gap-2 max-h-[60px] p-[7px] min-w-[180px]'>
              <div className="w-[40px] h-[40px] rounded-sm border flex justify-center items-center">
                <FaShoppingCart  className="text-[20px]"/>
              </div>
              <Typography>
                 All products
              </Typography>
            </CardBody> 
          </Card>
            {categories.map(item=>(
            <CategoryCardItem key={item.id} item={item}/>
          ))}
          </>
        }
      </div> 
       <div className="sm:flex sm:justify-center md:block">
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-3'>
            {
              isProduct ? 
              <div className='flex items-center gap-2'>
              <Spinner color='blue'/>  Loading...
              </div>
              :
              selectProducts.length>0 ?
              selectProducts.map(item=>(
                  <ProductCardItem key={item.id} item={item}/>
                )) :
                products.map(item=>(
                  <ProductCardItem key={item.id} item={item}/>
                )) 
            }
            
          </div>
       </div>
    </div>
  )
}

export default Products