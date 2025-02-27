import React from 'react'
import Product from '../Product/Product'

const ProductList = ({products}) => {

  return (

    <div className='card-container'>

     {products.map((product) => <Product key={product.id} product={product}/>)}

    </div>

  )
}

export default ProductList
