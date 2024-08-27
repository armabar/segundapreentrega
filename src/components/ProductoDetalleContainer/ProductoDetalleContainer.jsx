import { useState, useEffect } from "react"
import ProductList from "../ProductList/ProductList"
import { useParams } from "react-router-dom"

const ProductoDetalleContainer = () => {

    const [products, setProduct] = useState("")

    const {id} = useParams();

    useEffect(() =>{

        const fetchData = async () => {
          try{
            const response = await fetch('/productos.json')
            const data = await response.json()
            const newProduct = data.find(p => p.id === Number(id))
            setProduct(newProduct) 
          }catch(error){
            console.log(error)
          }
        }
    
        fetchData()
    
      },[id])

  return (
    <div className="container">

      <h1>{greeting}</h1>

      {loading ? <p>Cargando...</p> : <ProductList products={products}/>}   
      
    </div>
  )
}

export default ProductoDetalleContainer;
