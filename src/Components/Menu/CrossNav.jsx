import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

const CrossNav = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg"  variant="dark" sticky='top'>
      <Container fluid>
        <Navbar.Brand href="/home">Cross <label className='Commerce' href="/home">Commerce</label> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='about' href="/About">About</Nav.Link>
            <Nav.Link className='contact' href="/Contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className='signin' href="/Signin">Sign In</Nav.Link>
            <Nav.Link className='signup' href="/Signup">
             Sign Up
            </Nav.Link>
            <Nav.Link className='shopcart' href="/Cart">
             Shopping Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default CrossNav