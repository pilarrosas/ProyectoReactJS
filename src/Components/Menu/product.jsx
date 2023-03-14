import React, { useContext, useEffect, useState } from 'react'
import '../Shop/Shop.css'
import Button from 'react-bootstrap/Button';
import { ShopContext } from '../Context/shop-context';

import { productosVarios } from '../Shop/products2';



export const Product = (props) => {
  const { id, categoria, name, price, detail, prodImg, stock } = props.data;
  const { addToCart, cartItems, removeFromCart } = useContext(ShopContext)
  const cartItemsAmount = cartItems[id]
  const lessCartItemsAmount = removeFromCart[id]

 

  return (

    <div className="product" key={id} >
      <img src={prodImg} />
      <div className="description">
        <p className='name'>
          {name}
        </p>
        <p className='detail'> {detail} </p>
        <p className='price'> uSd {price}</p>
        <p className='stock'>Current Stock {stock}</p>
        <Button className='btn5' >  {lessCartItemsAmount < 0 && <> {lessCartItemsAmount}  </>}  </Button>
        <Button className='btn' variant='dark' onClick={() => removeFromCart(id)} > - </Button>
        <Button className='btn' variant='dark' onClick={() => addToCart(id)} > + </Button>
        <Button className='btn5' >  {cartItemsAmount > 0 && <> {cartItemsAmount}  </>} </Button>
        <div>
        <Button className='btn6' >  More </Button>
        </div>

      </div>
    </div>


  )
}
