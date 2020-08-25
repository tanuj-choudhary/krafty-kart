import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ProductCard from './ProductCard';

// Assets
import './mostRatedItems.scss';
import rated1 from '../../rated1.png';
import rated2 from '../../rated2.png';
import rated3 from '../../rated3.png';
import rated4 from '../../rated4.png';
import rated5 from '../../rated5.png';

export default function MostRatedItems() {
  return (
    <Container className="most-rated-container pt-30 pb-70">
      <Row>
        <Col>
          <h2 className="mt-20 mb-8">Most Rated Items</h2>
          <p className="mb-15">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6} lg={4}>
          <ProductCard
            image={rated1}
            title="Thermo Ball Etip Gloves"
            price="45,743"
          />
        </Col>
        <Col md={6} lg={4}>
          <ProductCard
            image={rated2}
            title="Thermo Ball Etip Gloves"
            price="45,743"
          />
        </Col>
        <Col md={6} lg={4}>
          <ProductCard
            image={rated3}
            title="Thermo Ball Etip Gloves"
            price="45,743"
          />
        </Col>
        <Col md={6} lg={4}>
          <ProductCard
            image={rated4}
            title="Thermo Ball Etip Gloves"
            price="45,743"
          />
        </Col>
        <Col md={6} lg={4}>
          <ProductCard
            image={rated5}
            title="Thermo Ball Etip Gloves"
            price="45,743"
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <div className=" pt-70">
          <a href="#12" className="btn-view py-30 px-28">
            View more Products
          </a>
        </div>
      </Row>
    </Container>
  );
}
