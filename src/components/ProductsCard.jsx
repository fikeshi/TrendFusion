import React, { useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function ProductsCard({product}) {
  console.log(product)

  return (
    <div className='group relative'>
      <div className='w-full h-96 cursor-pointer overflow-hidden relative'>
        <img className='h-full w-full object-cover group-hover:scale-110 duration-500 ' src={product.image}  alt="product image" />
        {/* <div className='absolute top-4 right-0 '>
          <p className='text-white bg-black'>sales</p>
        </div> */}
      </div>
      <div className='w-full border-[1px px-2 py-2]'>
        <div className='flex justify-between items-center'>
          <div>
            <h2 className='font-title-font text-base font-bold'>{product.title.substring(0,15)}</h2>
          </div>
          <div className='flex justify-end gap-2 relative overflow-hidden w-32 text-sm  '>
            <div className='flex gap-2 transform transition-transform group-hover:translate-x-24 duration-500' >
              <p className='line-through text-gray-500'>$69</p>
              <p>${product.price}</p>
            </div>
            <p className='absolute z-20 w-[100px] text-gray-500 hover:text gray-900  flex items-center gap-1 top-0 -translate-x-32 group-hover:translate-x-0 transition-transform duration-500 cursor-pointer'>add to cart  <span><IoIosArrowRoundForward /></span> </p>
          </div>
        </div>
      <div>
        <p>{product.category}</p>
      </div>
      </div>
    </div>
  )
}

export default ProductsCard
1  