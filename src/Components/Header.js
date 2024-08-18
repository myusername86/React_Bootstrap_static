import React from 'react';
import './Header.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  return (
    
    <div>
        <Navbar style={{ backgroundColor: 'black' }} expand="lg">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#lexicon" className="mr-3" style={{ color: '#fff',backgroundColor:'red' }}> {/* White Text */} Lexicon</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-2">
            
            <Nav.Link href="#login" style={{ color: '#fff' }}>Login</Nav.Link>
            <Nav.Link href="#signup" style={{ color: '#fff' }}>Signup</Nav.Link>
            <Nav.Link href="#about" style={{ color: '#fff' }}>About</Nav.Link>
            
            
          </Nav>
                 </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>



    
);
}   





export default Header;
