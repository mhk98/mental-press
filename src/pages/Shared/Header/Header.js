import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css'

const Header = () => {
  const [user] = useAuthState(auth)

  const handleSignOut = () =>{
    signOut(auth);
  }
    return (
      
        <div>
          <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/" >MentalPress</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="home#home">Home</Nav.Link>
      <Nav.Link href="home#services">Services</Nav.Link>
      <Nav.Link href="blog">Blog</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="about">About Me</Nav.Link>
      {
        user ? <button className='signout bg-primary' onClick={handleSignOut}>SignOut</button> : <Nav.Link as={Link} to="login">
        Login
      </Nav.Link>
      }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;