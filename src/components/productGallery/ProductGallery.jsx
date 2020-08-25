// Third Party imports
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Components
import GalleryImage from './GalleryImage';

// Assets
import './productGallery.scss';
import gallery1 from '../../gallery1.JPG';
import gallery2 from '../../gallery2.JPG';
import gallery3 from '../../gallery3.JPG';
import gallery4 from '../../gallery4.JPG';

export default function ProductGallery() {
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="mb-30">Gallery</h2>
        </Col>
      </Row>

      <Row>
        <Col md={6} lg={4} className="mb-15">
          <GalleryImage image={gallery1} />
        </Col>

        <Col md={6} lg={4} className="mb-15">
          <GalleryImage image={gallery2} />
        </Col>

        <Col md={6} lg={4} className="mb-15">
          <GalleryImage image={gallery3} />
        </Col>

        <Col md={6} lg={4} className="mb-15">
          <GalleryImage image={gallery4} />
        </Col>
      </Row>
    </Container>
  );
}
