import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';





const Header = () => {






    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href=""><Link to='/'>Bidyapith Academy</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#features"><Link to='/courselist'>Courses</Link></Nav.Link>
            <Nav.Link href="#features"><Link to='/faq'>FAQ</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to='/blog'>Blogs</Link></Nav.Link>
            
          </Nav>
          <Nav>
          <Nav.Link href="#features"><Link to='/login'>Login</Link></Nav.Link>
          <Nav.Link href="#features"><Link to='/register'>Register</Link></Nav.Link>
          </Nav>
<div>





</div>




        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;