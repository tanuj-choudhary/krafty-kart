import React from 'react';
import { Col, Spinner } from 'react-bootstrap';

import ProductCard from "../productCard";

export default function ProductsList({ products, xs, md, lg }) {
  function renderProductList() {
    if (!products || products.length === 0) {
      return (
        <div className="custom__center">
          <Spinner variant="primary" animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      );
    }
    
    if (products[0] === 'failed') {
      return <h1 className="custom__center" >Fail to load products</h1>;
    }

    return products.map((product) => (
      <Col key={product._id} xs={xs} md={md} lg={lg}>
        <ProductCard
          image={product.url}
          title={product.name}
          price={product.price}
          id={product._id}
        />
      </Col>
    ));
  }

  return renderProductList();
}
