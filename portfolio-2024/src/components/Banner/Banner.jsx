import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Lottie from 'lottie-react';
import animationData from '../../assets/lottie-header.json';
import './Banner.css'; // Import the CSS file

function Banner () {
  return (
    <Container className="banner bg-light py-3 d-flex align-items-center">
      <Row className="w-100">
        <Col md={6} className="text-container d-flex flex-column justify-content-center align-items-start">
          <h1 className="text-primary">Hi, I'm Matthew</h1>
          <h2 className="text-danger">I am a Developer</h2>
        </Col>
        <Col md={6} className="animation-container d-flex justify-content-end">
          <Lottie animationData={animationData} style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
