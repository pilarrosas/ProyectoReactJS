//import styled from 'styled-components'

//import ToggleButton from "./Toggle"
import CartWidget from "./CartWidget"

function CrossNav() {
  return (
    <>
    <nav className="App">
    <h2>Cross <span>Commerce</span></h2>
    <div>
     <a href='#'>Home</a>
     <a href='#'>Clothing</a>
     <a href='#'>Racks</a>
     <a href='#'>Kettelbell Set</a>
     <a href='#'>Dumbell Set</a>
     <a href='#'>Contact Us</a>
     </div>
     <CartWidget />
    </nav>
    </>
  )
}

export default CrossNav