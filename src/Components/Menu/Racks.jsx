import React from "react"
import { productosVarios } from "../Shop/products2"
import { Product } from "./product"


const Racks = () => {
  return (
    <div className="Shop">
    <h2 className='TitleShop'>Racks</h2>
    <div className="products"> {""}
         { productosVarios.map ((product, racks) => <Product key={racks} data= {product} />) }
          </div>
    </div>
  )
}

export default Racks