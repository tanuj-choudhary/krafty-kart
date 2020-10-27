import React from 'react';
import { connect } from 'react-redux';
import { getProductsList } from '../products/actionCreator';
import { setProductsFormValues } from './actionCreator';
import ProductSidebarView  from './ProductSidebarView';

function ProducSideBarContainer({setFormValues,params,getProducts}) {
    const onInputChange = (e) => {
        const {id,name,checked} = e.target;        
        setFormValues({ [id]: { [name]: checked } });
        
        const newParams = { ...params,[id]:{...params[id],[name]:checked} };
        
        /**
         * Get keys with true value
         */
        const category = Object.keys(newParams.category).filter((el) => newParams.category[el]);
        const sizes = Object.keys(newParams.sizes).filter((el) => newParams.sizes[el]);
        const brand = Object.keys(newParams.brand).filter((el) => newParams.brand[el]);

        const data = {category,sizes,brand,page:params.page};

        getProducts(data);
    };

    return <ProductSidebarView onInputChange={onInputChange} />;
}

const mapStateToProps = (state) => {
    return { params: state.productsParams };
};

const mapDispatchToProps = {setFormValues:setProductsFormValues,getProducts:getProductsList};

export default connect(mapStateToProps,mapDispatchToProps)(ProducSideBarContainer);
