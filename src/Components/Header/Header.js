
import React from "react";
import { Navbar, Container, Nav,Button } from "react-bootstrap";
import "./Header.css";
import logo from "../../images/logos/logo.png"

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="header-bg-color"
      variant="light"
    >
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" style={{width:"10rem"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#/">Home</Nav.Link>
            <Nav.Link href="#protfolio">Our Portfolio</Nav.Link>
            <Nav.Link href="#team">Our Team</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <Button variant="dark" className="btn">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
