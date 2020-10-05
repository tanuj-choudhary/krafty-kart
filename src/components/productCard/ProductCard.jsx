import React from 'react';
import { Link } from 'react-router-dom';

import './productCard.scss';

export default function ProductCard({ image, title, price, id }) {
  return (
    <div className="product mb-30">
      <div className="product__img mb-30">
        <img src={image} alt="product" />
      </div>
      <div className="product__caption">
        <h3 className="mb-8">
          <Link to={{ pathname: `/products/${id}` }}>{title}</Link>
        </h3>
        <span>{price}</span>
      </div>
    </div>
  );
}
