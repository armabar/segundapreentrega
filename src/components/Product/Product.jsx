import React from 'react'
import {Link} from 'react-router-dom'

const Product = ({product}) => {
  
  return (

    <Link to={`/item/${product.id}`}>

        <div key={product.id} className='card'>

         <h2>{product.name}</h2>
         <img src={product.image} alt={product.name} className='hola'/>

        </div>

    </Link>

  )
}

export default Product
