import React from 'react';
import { connect } from 'react-redux';

import { getProductsList } from '../products/actionCreator';
import ToolBoxView from './ToolboxView';

function ToolBoxContainer({getProducts}) {
    const onSubmit = (e) => {
        const {name,value} = e.target;
        const sortBy = {[name]:value};

        getProducts(sortBy);
    };

    return <ToolBoxView onSubmit={onSubmit} />;
}

const mapDispatchToProps = {getProducts:getProductsList};

export default connect(null,mapDispatchToProps)(ToolBoxContainer);
