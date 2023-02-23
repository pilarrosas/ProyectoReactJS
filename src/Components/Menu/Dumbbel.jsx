import React from "react"
//import { DUMBBELPRODUCTS } from '../Shop/products'
import { Product } from "./product"
import { productosVarios } from '../Shop/products2'


const Dumbbel = () => {
  return (
    <div className="Shop">
    <div>
    <h2 className='TitleShop'>Dumbbels</h2>
    </div>
    <div className="products"> {""}
         { productosVarios.map ((product, dumbbel) => <Product key={dumbbel} data= {product} />) }
          </div>
    </div>
  )
}

export default Dumbbel