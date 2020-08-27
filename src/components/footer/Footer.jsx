import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import FooterBlock from './FooterBlock';

import './footer.scss';

export default function Footer() {
  return (
    <Container className="footer-container pb-70">
      <Row className="d-flex justify-content-between mx-5 mx-md-0">
        <Col xl={4} lg={4} md={6}>
          <FooterBlock
            para="aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd."
            title="Free Shipping Method"
            icon="fas fa-box"
          />
        </Col>
        <Col xl={4} lg={4} md={6}>
          <FooterBlock
            para="aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd."
            title="Secure Payment System"
            icon="fas fa-unlock"
          />
        </Col>
        <Col xl={4} lg={4} md={6}>
          <FooterBlock
            title="End to End Encryption"
            para="aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd."
            icon="fas fa-user-secret"
          />
        </Col>
      </Row>
    </Container>
  );
}
