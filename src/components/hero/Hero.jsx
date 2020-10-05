// Third Party Imports
import React from 'react';
import { Jumbotron, Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Project Imports
import './hero.scss';
import watch from '../../images/watch.png';

function Hero() {
  const productID = '5f7abd72dcc9900ff8dcc3a5';

  return (
    <Container className="hero-container" fluid="xs">
      <Jumbotron className=" pt-38 pl-22 pt-md-0 pr-md-0 pb-md-0 mb-0">
        <Row className="justify-content-between align-items-center">
          <Col md={8} lg={8} className="pr-lg-auto">
            <h1 className="mb-26 ">Select Your New Perfect Style</h1>
            <p className="mb-30 mb-md-60 pr-md-50 pr-lg-0">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat is aute irure.
            </p>

            <Link
              to={{ pathname: `/products/${productID}` }}
              className="hero-btn py-20 px-35"
              variant="primary"
            >
              SHOP NOW
            </Link>
          </Col>
          <Col md={4} lg={3}>
            <img src={watch} alt="watch" />
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  );
}
export default Hero;
