// Third party imports
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// Project imports
import AddressBox from '../../views/addressBox/AddressBox';
import EditAddressForm from '../editAddressForm';

// Style Sheet
import './addressView.scss';

function AddressView({ user,handleDelete,formState,handleAdd }) {
    
    const renderAddresses = () => user.addresses.map(address => <AddressBox handleClick={handleDelete} id={address._id} key={address._id} type={address.type} name={address.name} mobileNumber={address.mobileNumber} address={address.address} pincode={address.pincode} />);
    

    const renderAddButton = () => {
        if (formState.status) {
             return <EditAddressForm />;
        }

        return <button onClick={handleAdd} type="button" className="add__address-btn py-16 mb-30">                                 
        <i className="fas fa-plus mx-16" />
        Add a new address
    </button>;
    };

    return (
        <div className="account-container py-40">
            <Container>
                <Row>
                    <Col>
                        <div className="profile__box">
                            <div className="profile__box__content px-32 py-24">
                                <div className="profile__box__form__heading pb-24">Manage addresses</div> 
                                {renderAddButton()}
                                {renderAddresses()}
                            </div>
                        </div>
                    </Col>
                </Row>
           </Container>
        </div>
    );
}


export default AddressView;