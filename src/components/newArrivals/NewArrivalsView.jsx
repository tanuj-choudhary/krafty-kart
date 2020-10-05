// Third PArty imports
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Project Imports
import ProductCard from '../productCard/ProductCard';

// Assets
import './newArrivalsView.scss';

function NewArrivalsView({ products }) {
  const renderProducts = () => {
    return products.map((product) => (
      <Col key={product._id} sm={6} lg={4}>
        <ProductCard
          image={product.url}
          title={product.name}
          price={product.price}
          id={product._id}
        />
      </Col>
    ));
  };

  return (
    <Container className="arrivals-container pt-50 pb-28 ">
      <Row>
        <Col>
          <h2 className="mb-78">New Arrivals</h2>
        </Col>
      </Row>
      <Row>{renderProducts()}</Row>
    </Container>
  );
}

export default NewArrivalsView;
