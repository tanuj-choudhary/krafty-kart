import React from 'react';

import './cartItem.scss';

function CartItem({item,handleRemove}) {
    return (
        <div id={item._id} className="cart__item">
            <div className="cart__item__content d-flex p-24">
                <div className="cart__item__left">
                    <img className="cart__item__image" src={item.url} alt={item.alt} />
                </div>
                <div className="cart__item__right">
                    <div className="cart__item__name">
                        {item.name}
                    </div>
                    <div className="cart__item__color">
                        {item.color}
                    </div>

                    <div className="cart__item__dial mt-8">
                        {item.dialShape}
                    </div>

                    <div className="cart__item__price mt-18">
                        ₹{item.price}
                    </div>
                    <div className="cart__item-btn mt-50">
                        <button onClick={handleRemove} type="button" className="cart__remove-btn p-0">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
