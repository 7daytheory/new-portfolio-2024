import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Lottie from 'lottie-react';
import animationData from '../../assets/lottie-header.json';
import './Banner.css';

function Banner() {
  return (
    <Container fluid className="banner bg-light py-5 d-flex align-items-center justify-content-center">
      <Row className="w-100 text-center">
        <Col md={6} className="text-container d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-primary">Hello.</h1>
          <h2 className="text-danger">I am Matthew Lowe</h2>
          <h3 className="text-success">& I am a Developer</h3>
        </Col>
        <Col md={6} className="animation-container d-flex justify-content-center">
          <Lottie animationData={animationData} style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;