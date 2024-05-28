import React from 'react'

function ProductsCard({product}) {
  console.log(product)
  return (
    <div>
      <div className=''>
        <img className='h-full w-{500px}' src={product.image}  alt="" />
      </div>
    </div>
  )
}

export default ProductsCard
