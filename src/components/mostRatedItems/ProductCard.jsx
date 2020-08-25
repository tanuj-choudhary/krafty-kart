import React from 'react';

import './productCard.scss';

export default function ProductCard({ image, title, price }) {
  return (
    <div className="productf mb-30">
      <div className="productf__img mb-30">
        <img src={image} alt="productf" />
        <div className="imgs-cap">
          <span className="py-20">Add to Cart</span>
        </div>
        <div className="add-wishList">
          <span className="icon-heart" />
        </div>
      </div>
      <div className="productf__caption">
        <h3 className="mb-8">
          <a href="#1">{title}</a>
        </h3>
        <span>{price}</span>
      </div>
    </div>
  );
}
