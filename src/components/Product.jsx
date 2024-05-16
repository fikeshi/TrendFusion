import React from 'react'
import ProductsCard from './ProductsCard'

function Product() {
  return (
    <div className='py-6'>
       <div className='flex flex-col items-center gap-4'>
            <h2 className='text-2xl bg-black text-white py-2 text-center w-80'>shopping everyday</h2>
            <span className='w-20 h-[3px] bg-black'></span>
            <p className='text-center  max-w-5xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic asperiores numquam delectus nostrum, quam deleniti repudiandae commodi non eaque tenetur, dolore, odit blanditiis corrupti? Soluta eveniet voluptatum enim quos!</p>
       </div>
          <div className='max-w-screen-xl mx-auto '>
              <ProductsCard />
       </div>
    </div>
  )
}

export default Product
