import { Button } from '@material-tailwind/react'
import React from 'react'
import { BrowserRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layouts/Layout'
import Products from './pages/Products'
import Favourite from './pages/Favourite'
import Basket from './pages/Basket'

const App = () => {
 const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Products/>}/>
      <Route path='/basket' element={<Basket/>}/>
      <Route path='/favourite' element={<Favourite/>}/>
    </Route>
  )
 )

  return (
    <RouterProvider router={router}/>
  )
}

export default App