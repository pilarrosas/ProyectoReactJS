import React from "react"
import { DUMBBELPRODUCTS } from '../Shop/products'
import { Product } from "./product"

const Dumbbel = () => {
  return (
    <div className="Shop">
    <h2 className='TitleShop'>Dumbbels</h2>
    <div className="products"> {""}
         { DUMBBELPRODUCTS.map ((product) => <Product data= {product} />) }
          </div>
    </div>
  )
}

export default Dumbbel