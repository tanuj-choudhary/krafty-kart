import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';

import OrderItem from '../../views/orderItem/OrderItem';
import './orderView.scss';

function OrdersView({orders}) {

    const renderOrders = () => {
        if (!orders) {
            return (
                <div className="custom__center">
                  <Spinner variant="primary" animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </div>
            );
        }

        if (orders.length === 0) {
            return <h1 className="custom__center">No orders to show</h1>;
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
