import React from 'react';

import './addressBox.scss';

function AddressBox({id,type,name,address,pincode,mobileNumber,handleClick}) {
    return (
        <div id={id} className="address-box mb-30">
            <div className="address-box__content">
                <div className="d-flex justify-content-between mb-10">
                    <div className="address-box__type ">{type}</div>
                    <button onClick={handleClick} type="button" className="btn-address-change">
                        <i className="fas fa-trash" />
                    </button>
                </div>
                
                <div className="d-flex">
                    <div className="address-box__name">{name}</div>
                    <div className="address-box__mobileNumber ml-15">{mobileNumber}</div>
                </div>
                
                <div className="d-flex mt-10">
                    <div className="address__box__address">{address}</div> - 
                    <div className="address-box__pincode">{pincode}</div>
                </div>
            </div>
        </div>
    );
}

export default AddressBox;
