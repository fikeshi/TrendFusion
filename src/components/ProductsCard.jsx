import React, { useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../Redux/trendfusionSlice';

function ProductsCard({ product }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const productId = product.title
  const productIdString = (productId) => {
    return String(productId).toLowerCase().split("").join("")
  }
 const rootProductId = productIdString(productId)

  const handleDetails = () => {
    navigate(`/product/${rootProductId}`, {
      state:{
        item:product,
      }
    })
  }
  return (
    <div className='group relative'>
      <div onClick={handleDetails} className='w-full h-96 cursor-pointer overflow-hidden relative box bg- '>
        <img className='h-full w-full object-fit  group-hover:scale-110 duration-500 ' src={product.image} alt="product image" />
        <div className='absolute top-4 right-0 '>
          <p className='text-white bg-black'>sales</p>
        </div>
      </div>
      <div className='w-full border-[1px px-2 py-2]'>
        <div className='flex justify-between items-center'>
          <div>
            <h2 className='font-title-font text-base font-bold'>{product.title.substring(0, 15)}</h2>
          </div>
          <div className='flex justify-end gap-2 relative overflow-hidden w-32 text-sm  '>
            <div className='flex gap-2 transform transition-transform group-hover:translate-x-24 duration-500' >
              <p className='line-through text-gray-500'>$69</p>
              <p className='semi-bold'>${product.price}</p>
            </div>
            <p onClick={()=>dispatch(addToCart({
              id: product.id,
              title:product.title,
              image:product.image,
              price: product.price,
              quantity:1,
              description:product.description,
            }))} className=''>add to cart  <span><IoIosArrowRoundForward /></span> </p>
          </div>
        </div>
        <div>
          <p>{product.category}</p>
        </div>
      </div>
    </div>
  )
}

// absolute z - 20 w - [100px] text - gray - 500 hover:text gray - 900  flex items - center gap - 1 top - 0 - translate - x - 32 group - hover: translate - x - 0 transition - transform duration - 500 cursor - pointer

export default ProductsCard 