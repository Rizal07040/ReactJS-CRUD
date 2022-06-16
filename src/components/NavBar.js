import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Component } from "react";
import { Link } from 'react-router-dom';

export default class NavBar extends Component{

    render(){
        return(

    <Navbar bg="light" expand="lg" fixed='top' className='shadow p-3 mb-5 bg-white rounded'>
      <Container>
        <Navbar.Brand as={Link}  to="/">CRUD</Navbar.Brand>
        <Navbar.Toggle  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav  className='mb-2 mb-lg-0'>
          <Nav.Item >
            <Nav.Link as={Link}  to="/">Home</Nav.Link
            ></Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link}  to="/blog">Blog</Nav.Link>
            </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link}  to="/contact">Contact</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );


        
    }
}