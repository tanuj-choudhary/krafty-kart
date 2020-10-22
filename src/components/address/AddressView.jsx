import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Faqs from '../../views/faqs/Faqs';
import './addressView.scss';

function AddressView() {
    return (
        <div className="account-container py-40">
            <Container>
                <Row>
                    <Col>
                        <div className="profile__box">
                            <div className="profile__box__content px-32 py-24">
                                {/* <EditAddressForm /> */}
                               
                            </div>
                        </div>
                    </Col>
                </Row>
           </Container>
        </div>
    );
}


export default AddressView;