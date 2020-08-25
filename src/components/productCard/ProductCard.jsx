import React from 'react';

export default function ProductCard({ image, title, price }) {
  return (
    <div className="product mb-30">
      <div className="product__img mb-30">
        <img src={image} alt="product" />
      </div>
      <div className="product__caption">
        <h3 className="mb-8">
          <a href="#">{title}</a>
        </h3>
        <span>{price}</span>
      </div>
    </div>
  );
}
