import { useState, useEffect } from "react"
import ProductList from "../ProductList/ProductList"
import { useParams } from "react-router-dom"


const ProductosContainer = ({greeting}) => {

  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(true)

  const {categoryId} = useParams()

  useEffect(() =>{

    const fetchData = async () => {
      try{
        const response = await fetch('/productos.json')
        const data = await response.json()
        const filter = categoryId ? data.filter((p) => p.category === categoryId) : data;
        setProducts(filter)
      }catch(error){
        console.log(error)  
      }finally{
        setLoading(false)
      }
    }

    fetchData()

  },[categoryId])

  console.log(categoryId)

  return (
    <div className="container">

      <h1>{greeting}</h1>

      {loading ? <p>Cargando...</p> : <ProductList products={products}/>}  
      
    </div>
  ) 

}

export default ProductosContainer