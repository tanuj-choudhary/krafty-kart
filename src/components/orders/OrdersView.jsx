import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import OrderItem from '../../views/orderItem/OrderItem';
import './orderView.scss';

function OrdersView({orders}) {

    const renderOrders = () => {
        if (!orders) {
            return <div>Loading...</div>;
        }
        return orders.map((order) => <OrderItem key={order._id} order={order} />);
    };

    return (
        <div className="orders__page py-20">
            <Container>
                <Row>
                    <Col>
                        <h1 className="orders__page__heading mb-10">Your Orders:</h1>
                        {renderOrders()}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default OrdersView;
