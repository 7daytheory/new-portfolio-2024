import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo-white.png';
import './Navigation.css';

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="120"
            height="auto"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="nav-item"><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
            <Nav.Link href="#about" className="nav-item"><FontAwesomeIcon icon={faInfoCircle} /> About</Nav.Link>
            <Nav.Link href="#projects" className="nav-item"><FontAwesomeIcon icon={faProjectDiagram} /> Projects</Nav.Link>
            <Nav.Link href="#contact" className="nav-item"><FontAwesomeIcon icon={faEnvelope} /> Contact</Nav.Link>
          </Nav>  
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;