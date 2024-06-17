import React from 'react';
import { Container } from 'react-bootstrap';
import Lottie from 'lottie-react';
import animationData from '../../assets/lottie-header.json';

function Banner () {
    return (
    <Container fluid className="banner bg-light py-6 d-flex justify-content-between align-items-center">
      <div className="text-container">
        <h1 className="text-primary">Hi, I'm Matthew</h1>
        <h2 className="text-danger">I am a Developer</h2>
      </div>
      <div className="animation-container">
        <Lottie animationData={animationData} style={{ width: '70%', float: 'right'}} />
      </div>
    </Container>
  );
};

export default Banner;