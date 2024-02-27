import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Container from '../components/Container'

const Layout = () => {
  return (
    <div>
      <Header/>
      <div className=' h-[calc(100vh-70px)] overflow-y-auto'>
        <Container>
          <Outlet/>
        </Container>
      </div>
    </div>
  )
}

export default Layout