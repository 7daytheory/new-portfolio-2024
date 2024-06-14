import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo-white.png';

function Navigation() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
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
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home"><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
              <Nav.Link href="#about"><FontAwesomeIcon icon={faInfoCircle} /> About</Nav.Link>
              <Nav.Link href="#projects"><FontAwesomeIcon icon={faProjectDiagram} /> Projects</Nav.Link>
              <Nav.Link href="#contact"><FontAwesomeIcon icon={faEnvelope} /> Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigation