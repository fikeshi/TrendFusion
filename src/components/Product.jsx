import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/trendfusionSlice';

function Product() {
  const dispatch = useDispatch()
  const [details, setDetails] = useState({})
  const [baseQty, setBaseQty] = useState(1)
  const location = useLocation()
  useEffect(()=>{
   setDetails(location.state.item)
  },[])


  return (
    <div>
      <div className='max-w-screen-xl mx-auto my-10 flex gap-10'>
        <div className='w-2/5 relative'>
          <img className='w-full h-[550px] object-fit' src={details.image} alt="product image" />
          <div className='absolute top-4 right-0 '>
            <p className='text-white bg-black'>sale</p>
          </div>
        </div>

        <div className='w-3/5 flex flex-col justify-center gap-12'>
          <div>
            <h1 className='font-bold text-4xl'>{details.title}</h1>
            <div className='flex gap-7 mt-3 items-center'>
              <p className='line-through text-gray-500'>$69</p>
              <p>${details.price}</p>
            </div>
          </div>
          <div className='flex items-center gap-2 text-base'>
            <div className=' flex'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
           </div>
            <p className='text-xs text-gray-500'>(1 customer reviews)</p>
          </div>
          <p className='text-base text-gray-500 '>{details.description}</p>
          <div className='flex items-center gap-4'>
            <div className='w-52 border flex gap-4 items-center justify-between p-3'>
              <p className='text-sm'>Quantity</p>
              <div className='flex items-center gap-4 font-semibold text-sm'>
                <button onClick={()=>setBaseQty((prev)=>prev === 1 ? (prev = 1) : prev - 1)} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-whiye cursor-pointer duration-300 active:bg-black'>-</button>
                <span>{baseQty}</span>
                <button onClick={()=>setBaseQty(baseQty + 1)} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-whiye cursor-pointer duration-300 active:bg-black'>+</button>
              </div>
            </div>
            <button onClick={()=>dispatch(addToCart({
              id: details.id,
              title: details.title,
              image: details.image,
              price: details.price,
              quantity: baseQty,
              description: details.description,
            }))} className='bg-black text-white py-3 px-6 active:bg-gray-800'>Add to Cart</button>
          </div>
          <p className='text-base text-gray-500'>Catergory: <span className='capitalize font-medium'>{details.category}</span></p>
        </div>
      </div>
    </div>
  )
}

export default Product
