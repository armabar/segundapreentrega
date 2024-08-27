import React from 'react'

const ProductoDetalle = ({product}) => {
  return (
    <div>
        
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>${product.price}</p>
      <p>{product.description}</p>
      <p>Stock: {product.stock}</p>
      <p>Categoria: {product.category}</p>
      
    </div>
  )
}

export default ProductoDetalle;
