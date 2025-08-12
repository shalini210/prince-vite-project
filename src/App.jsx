import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FooterComp from './components/FooterComp'
import Top from './components/Top'
import Service from './components/Service'
import Stateeg from './components/Stateeg'
import { Link, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import Allproducts from './components/Allproducts'
import ProductDetails from './components/ProductDetails'
import Categories from './components/Categories'
function App() {

 let companyname = "Tata Consultancy Services"
  return (
    <>
    {/* <Link to="/stateeg">State</Link>
    <Link to="/service">service</Link> */}
    <Navbar></Navbar>
      <Routes>
        {/* //here corresponding component will load based on route matching */}
        <Route path='/categories' element={<Categories></Categories>}></Route>
        <Route path='/ProductDetails/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/stateeg' element={<Stateeg></Stateeg>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/AllProducts' element={<Allproducts></Allproducts>}></Route>
        <Route path='/AllProducts/:categoryname' element={<Allproducts></Allproducts>}></Route>

      </Routes>
    </>
  )
}

export default App
