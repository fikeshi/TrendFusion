import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Products from '../components/Products'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
  const [products, SetProducts]= useState([])
  const data = useLoaderData()
  
  useEffect(()=>(
    SetProducts(data)
),[data])

  return (
    <div>
      <Banner/> 
      <Products products={products}/>
    </div>
  )
}

export default Home
