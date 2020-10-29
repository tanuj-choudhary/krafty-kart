import React from 'react';

import './orderItem.scss';

function OrderItem({order}) {

    const renderItems = () => {
        const items = order.cart.products;
        
        return items.map((item) => {
            return (
                <div key={item._id} className="order__item mb-8 p-16">
                    <div className="order__item__content d-flex">
                        <div className="order__item__left mr-60 mr-md-0 d-flex">
                            <div className="mx-20">
                                <img className="order__item__left__image"src={item.url} alt={item.alt}/>
                            </div>
                            <div className="order__item__left__detail">
                                <div className="order__item__name mb-10">
                                    {item.name}
                                </div>
                                <div className="order__item__color mb-5">
                                    {item.color} 
                                </div>
                                <div className="order__item__dial mb-5">
                                {item.dialShape}
                                </div>
                            </div>
                        </div>
                        <div className="order__item__right">
                        ₹ {item.price}
                        </div>
                    </div>
                </div>
            );
        });
    };

    return renderItems();
}

export default OrderItem;
