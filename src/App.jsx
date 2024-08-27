import './App.css'
import CartWidget from './components/CartWidget/CartWidget'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contacto from './components/Contacto/Contacto'
import ProductosContainer from './components/ProductosContainer/ProductosContainer'
import Product from './components/Product/Product'
import ProductList from './components/ProductList/ProductList'
import Footer from './components/Footer/Footer'
import ProductoDetalleContainer from './components/ProductoDetalleContainer/ProductoDetalleContainer'

function App() {


  return(

    <>

      <BrowserRouter>

        <Navbar/>

        <Routes>

          <Route path='/contacto' element={<Contacto/>}/>

          <Route path='/category/:categoryId' element={<ProductosContainer/>}/>

          <Route path='/' element={<ProductosContainer/>}/>

          <Route path='/item/:id' element={<ProductoDetalleContainer/>}/>

        </Routes>

        <Footer/>
    
    
      </BrowserRouter>


    </>

  )
}

export default App;