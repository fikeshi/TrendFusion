import React from 'react'
import Banner from '../components/Banner'
import Product from '../components/Product'
import { useLoaderData } from 'react-router-dom'

const Home = ({productData}) => {
  // const data = useLoaderData()
  // console.log(data)
  return (
    <div>
      <Banner/>
      <Product/>
    </div>
  )
}

export default Home
