import React from 'react';
import { Col } from 'react-bootstrap';

import ProductCard from '../productCard/ProductCard';

export default function ProductsList({ products, xs, md, lg }) {
  function renderProductList() {
    if (!products) {
      return <div>Loading...</div>;
    }

    if (products[0] === 'failed') {
      return <div>Fail to load products</div>;
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
