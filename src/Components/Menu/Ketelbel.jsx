import React from 'react'
import { KETTPRODUCTS } from '../Shop/products'
import { Product } from "./product"

const Ketelbel = () => {
  return (
    <div className='Shop'>
        <h2 className='TitleShop'>Ketellbell</h2>
        <div className="products"> {""}
         { KETTPRODUCTS.map ((product) => <Product data= {product} />) }
          </div>
    </div>
  )
}

export default Ketelbel