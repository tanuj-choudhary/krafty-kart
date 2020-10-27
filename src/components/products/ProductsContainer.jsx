import React, { useState , useEffect } from 'react';

import { connect } from 'react-redux';
import { setProductsFormValues } from '../productSidebar/actionCreator';

import {getProductsList} from './actionCreator';
import ProductsView from './ProductsView';

function ProductsContainer({products,getProducts,params,setParams}) {
    const [sidebarActive, setsidebarActive] = useState(false);

    useEffect(() => {
        getProducts();
    }, []);

    const toggleSidebar = () => {
        if (sidebarActive) {
          return setsidebarActive(false);
        }
        
        setsidebarActive(true);
  };
  
  const handlePageChange = (e) => {
    const { id } = e.target.closest('.page-link');
    
    let newParams = {};

    if (id === 'prev') {
      if (params.page <= 1) {
        return;
      }
      newParams = { ...params, page: params.page - 1 };
      setParams(newParams);
    }

    if (id === 'next') {
      if (params.page >= 5) {
        return;
      }
      newParams = { ...params, page: params.page + 1 };
      setParams(newParams);
    }
    
     // Get keys with true value 
     const category = Object.keys(newParams.category).filter((el) => newParams.category[el]);
     const sizes = Object.keys(newParams.sizes).filter((el) => newParams.sizes[el]);
     const brand = Object.keys(newParams.brand).filter((el) => newParams.brand[el]);

     const data = {category,sizes,brand,page:newParams.page};

     getProducts(data);       
  };

    return <ProductsView currentPage={params.page} products={products} handlePageChange={handlePageChange} toggleSidebar={toggleSidebar} sidebarActive={sidebarActive} />;
}

const mapStateToProps = state => {
    return { products: Object.values(state.products),params:state.productsParams };
};

const mapDispatchToProps= {getProducts:getProductsList,setParams:setProductsFormValues};

export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer);
