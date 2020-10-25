import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import CartItem from '../../views/cartItem/CartItem';

import './cartView.scss';

function CartView({user,handleRemove,handleOrderPlace,handleSubmit,orders}) {

    const shortenAddress = (address) => {
        if (address.length < 20) {
            return address;
        }
        return `${address.substr(0, 20)}...`;
    };

    const renderAddressDropdown = () => {
        return <Field name="address" component="select">
                {user.addresses.map(address => 
                    <option key={address._id}  value={address._id}>{shortenAddress(address.address)}</option>)}    
            </Field>;
        
    };

    const renderCartItem = () => {
        return (
            user.cart.products.map(product =>  <CartItem key={product._id} handleRemove={handleRemove} item={product}  /> )
        );
    };

    const getPrice = () => {
        let totalCost=0;
        user.cart.products.forEach((product) => {  totalCost += product.price; });
        return totalCost;
    };

    
    
    return (
        <Container>
            <Row>
                <Col>
                    <form onSubmit={handleSubmit(handleOrderPlace)} className="cart__block">
                        <div className="cart__top d-md-flex align-items-center justify-content-md-between">
                            <div className="cart__left px-24">
                                My Cart
                            </div>
                            <div className="cart__right px-24">
                                <i className="fa fa-map-marker location__icon" />
                                <span className="cart__right__text ml-8 mr-12">Deliver to</span>
                                    {renderAddressDropdown()}
                            </div>
                        </div>
                        <div className="cart__items">
                               {renderCartItem()}
                        </div>
                        <div className="cart__total p-24">
                            <h1 className="cart__total__heading pb-17">
                                Cart Total
                            </h1>

                            <div className="cart__total__amount py-15 d-flex justify-content-between">
                                <div>
                                    Total
                                </div>
                                <div>
                                ₹ {getPrice()}
                                </div>
                            </div>
                        </div>

                        <div className="cart__place__order">
                            <div className="cart__place__order__content d-flex justify-content-center justify-content-md-end">
                                <button type="submit" className="cart__place__order-btn">Place order</button>
                            </div>                        
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

const cartViewWrapper = reduxForm({
    form: 'cart',
})(CartView);

export default cartViewWrapper;
