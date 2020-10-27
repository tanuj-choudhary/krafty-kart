import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { getOrders } from './actionCreator';
import OrdersView from './OrdersView';

function OrdersContainer({orders,getOrders}) {
    useEffect(() => {
        getOrders();
    }, []);

    return <OrdersView orders={orders} />;
}


const mapStatetoProps = (state) => {
    return {orders:Object.values(state.orders)};
};

const mapDispatchToProps = { getOrders};

export default connect(mapStatetoProps,mapDispatchToProps)(OrdersContainer);
