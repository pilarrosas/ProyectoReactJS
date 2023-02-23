import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';

import { FaOpencart } from 'react-icons/fa'

function CrossNav(props) {

  return (
    <>

      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" className='h2'>Cross <span className='commerce'>Commerce</span> </Navbar.Brand>
          <Nav className='me-center'>
            <Nav.Link className='link' href="/Clothing">Clothing</Nav.Link>
            <Nav.Link className='link' href="/Ketelbel">Ketellbell</Nav.Link>
            <Nav.Link className='link' href="/Dumbbel">Dumbbel</Nav.Link>
            <Nav.Link className='link' href="/Racks">Racks</Nav.Link>
            <Nav.Link className='link' href="/Cart">Cart</Nav.Link>
            <Nav.Link className='link' href="/ContactUs">Contact Us</Nav.Link>
          </Nav>
          <Dropdown>
            <Dropdown.Toggle className='togg' variant='color: black'>
              <FaOpencart className='cart'></FaOpencart>

            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidht: 370 }}>
              <span className='drop' style={{ padding: 5 }}>Cart is Empty!</span>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </>
  );
}

export default CrossNav