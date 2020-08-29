import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

import testImage from '../../images/test-product-1.png';
import './productDetail.scss';

export default function ProductDetail() {
  return (
    <Container className="product-detail-container mb-20">
      <Row>
        <Col md={6} lg={5}>
          <figure className="product-image mb-10">
            <Image className="product-main-image" src={testImage} />
          </figure>
        </Col>
        <Col md={6} lg={7}>
          <div className="product-details">
            <h1 className="product-title mb-12 pr-10">
              Dark yellow lace cut out swing dress
            </h1>
            <div className="product-price mb-13">45793</div>
            <div className="product-content">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam, magni.
              </p>
            </div>

            <div className="product-detail-filter">
              <label>size:</label>
              <div className="select-custom">
                <select
                  className="size-select py-8 pr-30 pl-10"
                  name="size"
                  id="size"
                >
                  <option value="#">Select a size</option>
                  <option value="S">Small</option>
                  <option value="M">Medium</option>
                  <option value="L">Large</option>
                  <option value="XL">Extra Large</option>
                </select>
              </div>
            </div>

            <div className="product-detail-filter">
              <label>Qty:</label>
              <div className="select-qty pl-3">
                <div className="input-group input-spinner d-flex align-items-stretch">
                  <div className="input-group-prepend">
                    <button type="button" className="decrement-btn">
                      <i className="fas fa-minus py-12 px-4" />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="qty-input py-8 px-26"
                    required
                    defaultValue="1"
                  />
                  <div className="input-group-append">
                    <button type="button" className="increment-btn">
                      <i className="fas fa-plus py-12 px-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-detail-action">
              <Button className="add-cart-btn py-10 px-15">
                <i className="fas fa-cart-plus mr-10" />
                <span>Add to Cart</span>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
