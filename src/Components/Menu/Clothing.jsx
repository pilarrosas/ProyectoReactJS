import React from "react"
import { productosVarios } from '../Shop/products2'
import { Product } from './product'
import { ShopContext } from "../Context/shop-context"

const Clothing = ( {} ) => {
  return (
    <>
      <div className="Shop">
    <div>
    <h2 className='TitleShop'></h2>
    </div>
    <div className="products"> {""}
         { productosVarios.map ((product, clothing) => <Product key={clothing} data= {product} />) }
          </div>
    </div>
        
    </>
)
}

export default Clothing