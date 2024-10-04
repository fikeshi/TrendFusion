import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, ScrollRestoration } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>

    </div>
  )
}

export default Layout