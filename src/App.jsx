
import { useState } from 'react'
import CrossNav from './Components/Menu/CrossNav'
import Home from './Components/Menu/Home'
import './Components/Menu/CrossNav.css'
import Clothing from './Components/Menu/Clothing'
import Dumbbel from './Components/Menu/Dumbbel'
import Racks from './Components/Menu/Racks'
import Cart from './Components/Menu/Cart'
import Ketelbel from './Components/Menu/Ketelbel'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactForm from './Components/Menu/ContactUs'
import { ShopContextProvider } from './Components/Context/shop-context'





function App() {
  

  return (
    <>
    <ShopContextProvider>
      <BrowserRouter>
       <CrossNav />
        <Routes>
        <Route path='/' element = { <Home />} />
        <Route path='/Clothing' element ={<Clothing />} />
        <Route path='/Ketelbel' element = { <Ketelbel /> } />
        <Route path='/Dumbbel' element ={<Dumbbel/>} />
        <Route path='/Racks' element ={<Racks />} />
        <Route path='/Cart' element ={<Cart />} />
        <Route path='/ContactUs' element ={<ContactForm />} />
        </Routes>
      </BrowserRouter>
      </ShopContextProvider>
      
    </>
  )
}

export default App
