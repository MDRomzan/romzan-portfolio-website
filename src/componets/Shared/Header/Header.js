import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import "./Header.css";

const Header = () => {
    return (
        <>
  <Navbar collapseOnSelect expand="lg" sticky="top"  bg="dark" variant="dark">
    <Container>
    <Navbar.Brand  href="#home">Romzan Protfolio</Navbar.Brand>
     <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">

      <Nav.Link className="text-white nav-design" as={HashLink} to="/home">Home</Nav.Link>
      <Nav.Link className="text-white nav-design" as={HashLink} to="/service">Services</Nav.Link>
      <Nav.Link className="text-white  nav-design" as={HashLink} to="/project">My Portfolio</Nav.Link>
      <Nav.Link className="text-white  nav-design" as={HashLink} to="/about">About me</Nav.Link>
      <Nav.Link className="text-white nav-design" as={HashLink} to="/contact">Contact us</Nav.Link>
    
    </Navbar.Collapse>
    </Container>
  </Navbar>
</>
    );
};

export default Header;