import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';
import DayNightToggle from 'react-day-and-night-toggle'
import { useState } from 'react';








const Header = () => {

  const [isDarkMode, setIsDarkMode] = useState(false)
const {user,logOut}=useContext(AuthContext)


const handleSignout=()=>{

  logOut()
  
  .then(()=>{})
  
  .catch(error=>console.error(error))
  
  
  
      
  }


    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
      <span className='fs-2 fst-italic fw-bolder me-2 text-danger border rounded-circle border-warning'>B</span>
        <Navbar.Brand href=""><Link to='/'>Bidyapith Academy</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#features"><Link to='/courselist'>Courses</Link></Nav.Link>
            <Nav.Link href="#features"><Link to='/faq'>FAQ</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to='/blog'>Blogs</Link></Nav.Link>
            
          </Nav>
          <Nav>


{user ?. email && <span>Welcome,{user.email}</span>}


{/* <BsToggleOn></BsToggleOn> */}

<Link to="/login"><Button variant="">Login</Button></Link>

          <Link to="/register"><Button variant="">Register</Button></Link>



           {

user ?.email ?
<Button onClick={handleSignout} variant="">Logout</Button>

: <Link to="/login">

<Button className='btn btn-small'>Login</Button>

</Link>


           }


<DayNightToggle
      onChange={() => setIsDarkMode(!isDarkMode)}
      checked={isDarkMode}
    />

          </Nav>




<div>





</div>




        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;