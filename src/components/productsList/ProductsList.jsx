import React from 'react';
import { Col } from 'react-bootstrap';

import ProductCard from '../productCard/ProductCard';

export default function ProductsList({ products, xs, md, lg }) {
  function renderProductList() {
    return products.map((product) => (
      <Col key={product.key} xs={xs} md={md} lg={lg}>
        <ProductCard
          image={product.image}
          title={product.title}
          price={product.price}
        />
      </Col>
    ));
  }

  return renderProductList();
}
