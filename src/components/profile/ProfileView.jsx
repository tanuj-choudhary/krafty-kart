import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


import EditMeForm from '../editmeForm';
import './profileView.scss';

 function ProfileView() {
    return (
        <div className="account-container py-40">
            <Container>
                <Row>
                    <Col>
                        <div className="profile__box">
                            <div className="profile__box__content px-32 py-24">
                               <EditMeForm />
                            </div>
                        </div>
                    </Col>
                </Row>
           </Container>
        </div>
    );
}


export default ProfileView;