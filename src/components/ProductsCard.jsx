import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function ProductsCard({product}) {
  console.log(product)
  return (
    <div className='group '>
      <div className='w-full h-96 cursor-pointer overflow-hidden'>
        <img className='h-full w-full object-cover group-hover:scale-110 duration-500 ' src={product.image}  alt="product image" />
      </div>
      <div className='w-full border-[1px px-2 py-2]'>
        <div className='flex justify-between items-center'>
          <div>
            <h2 className='font-title-font text-base font-bold'>{product.title}</h2>
          </div>
          <div className='flex gap-2'>
            <div>
              <p>add to cart <IoIosArrowRoundForward /> </p>
            </div>
            <p className='line-through text-gray-500'>$69</p>
            <p>${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsCard
1  