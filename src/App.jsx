import { useState } from 'react'
import Saludo from './Components/Body/Mensaje'
//import reactLogo from './assets/react.svg'
import CrossNav from './Components/Menu/CrossNav'
import './Components/Menu/CrossNav.css'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <CrossNav />
    <Saludo titulo= 'Este es un Mensaje PROP de Bienvenida' subtitulo= 'Pronto sere un Ecommerce' />
    </>
  )
}

export default App
