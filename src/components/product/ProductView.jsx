import React from 'react';
import { Spinner } from 'react-bootstrap';

import ProductDetail from './ProductDetail';
import './product.scss';


 function ProductView({product,handleCartClick}) {

   const renderProduct = () => {
     if (!product) {
      return (
        <div className="custom__center">
          <Spinner variant="primary" animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      );
     }

     if (product.error) {
       return <h1 className="custom__center">Error loading product</h1>;
     }
     
     return <ProductDetail product={product} handleCartClick={handleCartClick} />;
  };
   
  return renderProduct();
}

export default  ProductView;