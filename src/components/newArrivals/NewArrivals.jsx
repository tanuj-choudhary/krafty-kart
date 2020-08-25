// Third PArty imports
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ProductCard from '../productCard/ProductCard';

// Assets
import './newArrivals.scss';
import test1 from '../../test-product-1.png';
import test2 from '../../test-product-2.png';
import test3 from '../../test-product-3.png';

export default function NewArrivals() {
  return (
    <Container className="arrivals-container pt-50 pb-28 ">
      <Row>
        <Col>
          <h2 className="mb-78">New Arrivals</h2>
        </Col>
      </Row>
      <Row>
        <Col sm={6} lg={4}>
          <ProductCard
            image={test1}
            title="Thermo Ball Etip Gloves"
            price="45743"
          />
        </Col>
        <Col sm={6} lg={4}>
          <ProductCard
            image={test2}
            title="Thermo Ball Etip Gloves"
            price="45743"
          />
        </Col>

        <Col sm={6} lg={4}>
          <ProductCard
            image={test3}
            title="Thermo Ball Etip Gloves"
            price="45743"
          />
        </Col>
      </Row>
    </Container>
  );
}
