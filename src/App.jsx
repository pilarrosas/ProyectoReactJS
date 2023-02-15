
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




function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <CrossNav />
        <Routes>
        <Route path='/' element = { <Home />} />
        <Route path='/Clothing' element ={<Clothing />} />
        <Route path='/Ketelbel' element = { <Ketelbel /> } />
        <Route path='/Dumbbel' element ={<Dumbbel/>} />
        <Route path='/Racks' element ={<Racks />} />
        <Route path='/Cart' element ={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
