import React from 'react'
import { productosVarios } from '../Shop/products2'
import { Product } from "./product"

const Ketelbel = () => {
  return (
    <div className='Shop'>
        <h2 className='TitleShop'>Ketellbell</h2>
        <div className="products"> {""}
         { productosVarios.map ((product, kettelbel) => <Product key={kettelbel} data= {product} />) }
          </div>
    </div>
  )
}

export default Ketelbel