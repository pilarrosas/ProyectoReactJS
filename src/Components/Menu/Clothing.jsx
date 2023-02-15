import React from "react"
import { CLOTHINGPRODUCTS } from '../Shop/products'
import { Product } from "./product"

const Clothing = () => {
  return (
    <>
    <div className='Shop'>
        <div>
            <h2 className='TitleShop'>Clothing</h2>
        </div>
        <div className="products"> {""}
         { CLOTHINGPRODUCTS.map ((product) => <Product data= {product} />) }
          </div>
    </div>
        
    </>
)
}

export default Clothing