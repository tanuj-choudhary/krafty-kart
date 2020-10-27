/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProductView from './ProductView';

import { getProduct } from './actionCreator';
import {addProductToCart} from '../Cart/actionCreator';

const ProductContainer = ({getProd,product,addToCart,...props}) => {
    const {id} = props.match.params;
   
   
    useEffect(() => {
        getProd(id);
    },[]);
  

    const handleCartClick = () => {
        addToCart(id);
    };

    return <ProductView handleCartClick={handleCartClick} product={product} />;
};

const mapStateToProps = (state) => {
    return {product:state.product};
};

const mapDispatchToProps = {
    getProd: getProduct,
    addToCart:addProductToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
