import React from 'react';
import { connect } from 'react-redux';

import CartView from './CartView';
import {placeOrder, removeProductFromCart} from './actionCreator';

function CartContainer({ user, removeProduct,placeCartOrder,orders }) {
    const handleRemove = (e) => {
        const { id } = e.target.closest('.cart__item');
        removeProduct(id);
    };

    const handleOrderPlace = (values) => {
        if (!values.address) {
            return window.alert('Please select an address');
        }
        const data = user.addresses.filter((address) => address._id === values.address);
        placeCartOrder(data[0]);
    };

    return <CartView user={user} orders={orders} handleOrderPlace={handleOrderPlace} handleRemove={handleRemove} />;
}

const mapStateToProps = (state) => {
    return {orders:Object.values(state.orders)};
};

const mapDispatchToProps = {removeProduct:removeProductFromCart,placeCartOrder:placeOrder};

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);
