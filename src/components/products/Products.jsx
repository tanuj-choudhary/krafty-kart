import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

import Toolbox from '../toolbox/Toolbox';
import ProductsList from '../productsList/ProductsList';

import test1 from '../../images/test-product-1.png';
import test2 from '../../images/test-product-2.png';
import ProductSidebar from '../productSidebar/ProductSidebar';

import './products.scss';

export default function Products() {
  const products = [
    { image: test1, title: 'Thermo Ball Etip Gloves', price: '45743', key: 1 },
    { image: test2, title: 'Thermo Ball Etip Gloves', price: '45743', key: 2 },
    { image: test1, title: 'Thermo Ball Etip Gloves', price: '45743', key: 3 },
    { image: test2, title: 'Thermo Ball Etip Gloves', price: '45743', key: 4 },
    { image: test1, title: 'Thermo Ball Etip Gloves', price: '45743', key: 5 },
    { image: test1, title: 'Thermo Ball Etip Gloves', price: '45743', key: 6 },
    { image: test2, title: 'Thermo Ball Etip Gloves', price: '45743', key: 7 },
    { image: test1, title: 'Thermo Ball Etip Gloves', price: '45743', key: 8 },
    { image: test2, title: 'Thermo Ball Etip Gloves', price: '45743', key: 9 },
    { image: test1, title: 'Thermo Ball Etip Gloves', price: '45743', key: 10 },
  ];

  const xs = 6;
  const md = 4;
  const lg = 3;

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <Container>
      <Row>
        <Col lg={9}>
          <Toolbox />
          <Row>
            <ProductsList products={products} xs={xs} md={md} lg={lg} />
          </Row>
        </Col>
        <Col lg={3} className="order-lg-first">
          <ProductSidebar />
          {isTabletOrMobile && (
            <>
              <button type="button" className="sidebar-fixed-toggler">
                <i className="fas fa-id-card" />
              </button>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}
