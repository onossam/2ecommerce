import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../index.css';

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Link to="/">ProShop</Link>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to="/cart" className="mx-3 link">
                {' '}
                <i className="fas fa-shopping-cart "></i> Cart
              </Link>
              <Link to="/login" className="link">
               <i className="fas fa-user "></i> Login 
              </Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
