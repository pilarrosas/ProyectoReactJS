import React, { useState, useEffect } from 'react'
import { Await } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { productosVarios } from '../Shop/products2';
import { ShopContext } from '../Context/shop-context';
import Clothing from './Clothing';


const Products = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    let componentMounted = true

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const response = await fetch()
            if (componentMounted) {
                setData(await response.clone().json(URL))
                setFilter(await response.json)
                setLoading(false)
                console.log(data)
            }
            return () => {
                componentMounted = false
            }
        }
        getProducts()
    }, [])
    const Loading = () => {
        return (
            <>
                Loading ...
            </>
        )
    }
    const ShowProducts = () => {
        return (
            <>
                <Container className='Contenedor' fluid>
                    <Button className='btn' variant='dark'> Clothing </Button>
                    <Button className='btn' variant='dark'> Ketelbell </Button>
                    <Button className='btn' variant='dark'> Dumbbel </Button>
                    <Button className='btn' variant='dark'> Racks </Button>
                </Container>
               
            </>
        )
    }
    return (
        <>
            <h2 className='allprod'>All Products</h2>
            <div>
                {<ShowProducts />}
                { <Clothing />}
            </div>
        </>
    )
}


export default Products