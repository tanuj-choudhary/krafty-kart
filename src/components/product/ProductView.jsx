import React from 'react';

import ProductDetail from './ProductDetail';
import './product.scss';


 function ProductView({product,handleCartClick}) {

  return (
    <div>
      <ProductDetail product={product} handleCartClick={handleCartClick} />
    </div>
  );
}

export default  ProductView;