import React from 'react'
import '../Shop/Shop.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const Product = (props) => {
    const {id, name, price, detail, prodImg, stock} = props.data
  return (
    
    <div className="product">
      <img src={prodImg} />
      <div className="description">
        <p className='name'>
          {name}
        </p>
        <p className='detail'> {detail}</p>
        <p className='price'> uSd {price}</p>
        <p className='stock'>Current Stock {stock}</p>
        <Button className='btn' variant="dark">Add!</Button>
      </div>
      </div>
  
 
  )
}
