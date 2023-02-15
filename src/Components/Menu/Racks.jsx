import React from "react"
import { RACKPRODUCT } from "../Shop/products"
import { Product } from "./product"


const Racks = () => {
  return (
    <div className="Shop">
    <h2 className='TitleShop'>Racks</h2>
    <div className="products"> {""}
         { RACKPRODUCT.map ((product) => <Product data= {product} />) }
          </div>
    </div>
  )
}

export default Racks