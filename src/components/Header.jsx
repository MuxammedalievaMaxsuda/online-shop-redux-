import { AiOutlineHeart } from "react-icons/ai"; 
import { BsCart3 } from "react-icons/bs"; 
import React from 'react'
import Container from './Container'
import { Link } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import { useSelector } from "react-redux";

const Header = () => {
  const {favourite}=useSelector(state=>state.favourite)
  const {basket}=useSelector(state=>state.basket)
  return (
    <div className='border-b-[1px] sticky bg-white shadow-md z-20 top-0'>
      <Container>
        <header className='flex justify-between items-center gap-1 h-[70px] py-3'>
          <Link to='/'>
            <h1 className="font-bold text-[20px]">Logo</h1>
          </Link>
          <div className="w-[60%]">
          <input type="search" placeholder="Search..." className="w-[70%] !border outline-none py-[7px] px-3 !border-gray-300  bg-white rounded-full text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent
           placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 
           focus:ring-gray-900/10" />
          </div>
          <ul className="flex  justify-center items-center gap-4">
            <Link to='/basket'>
              <li className="flex relative hover:text-blue-500 flex-col justify-center items-center">
                <BsCart3 className="text-[25px]"/>
                <span className="text-[12px]">Basket</span>
                <div className="absolute top-[-10px] right-[-10px] flex justify-center items-center text-[12px] w-[18px] h-[18px] bg-blue-500 text-white rounded-full ">{basket.length}</div>
              </li>
            </Link>
            <Link to='/favourite'>
              <li className="flex relative hover:text-blue-500 flex-col justify-center items-center">
                <AiOutlineHeart className="text-[25px]" />
                <span className="text-[12px]">Favourite</span>
                <div className="absolute top-[-10px] right-[-5px] flex justify-center items-center text-[12px] w-[18px] h-[18px] bg-blue-500 text-white rounded-full ">{favourite.length}</div>
              </li>
            </Link>
          </ul>
        </header>
      </Container>
    </div>
  )
}

export default Header