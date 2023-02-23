import React, { createContext, useState } from 'react'
import { productosVarios } from '../Shop/products2';

export const ShopContext = createContext(null);

let getDefaultCart = () => {
let cart = {}
for (let i =1; i < productosVarios.length + 1; i++) {
    cart [i] = 0
}
 return cart

}

export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    const addToCart = (itemId) => {
        setCartItems ((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 } ));
    };
    const removeFromCart = (itemId) => {
        setCartItems ((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 } ));
    };

    const contextValue = {cartItems, addToCart, removeFromCart}
    console.log(cartItems)

    return ( <ShopContext.Provider value= {contextValue}> {props.children} </ShopContext.Provider> )

}
