import React from 'react'
import Cover from '../assets/Cover.webp'
import Card from 'react-bootstrap/Card'
import Products from './Products'

const Home = () => {
  return (
    <>
   <Card className="bg-dark text-white">
      <Card.Img src={Cover} alt="Card image" />
    </Card>
    
    <Products />
    </>
  )
}

export default Home