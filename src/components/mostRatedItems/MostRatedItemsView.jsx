import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ProductCard from './ProductCard';

// Assets
import './MostRatedItemsView.scss';

export default function MostRatedItemsView({ products }) {
  const renderProducts = () => {
    if (products.length === 0) {
      return (
        <div className="custom__center">
          <Spinner variant="primary" animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      );
    }

    if (products[0] === 'failed') {
      return (
        <div className="error custom__center">Error loading products...</div>
      );
    }

    return products.map((product) => (
      <Col key={product._id} md={6} lg={4}>
        <ProductCard
          image={product.url}
          title={product.name}
          price={product.price}
          alt={product.alt}
        />
      </Col>
    ));
  };

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
      <Row>{renderProducts()}</Row>
      <Row className="justify-content-center">
        <div className=" pt-70">
          <Link to={{ pathname: '/products' }} className="btn-view py-30 px-28">
            View more Products
          </Link>
        </div>
      </Row>
    </Container>
  );
}
