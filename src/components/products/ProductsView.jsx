import React from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap';

import Toolbox from '../toolbox';
import ProductsList from '../productsList/ProductsList';

import ProductSidebar from '../productSidebar';

import './productsView.scss';

export default function Products({toggleSidebar,handlePageChange,currentPage,sidebarActive,products}) {

  const xs = 6;
  const md = 4;
  const lg = 3;

  const renderSidebar = () => {
    if (sidebarActive) {
      return <div className="products__product__sidebar products__product__sidebar__active p-30">
      <ProductSidebar  />
    </div>;
    }

    return <div className="products__product__sidebar">
      <ProductSidebar  />
    </div>;
  };

  const renderSidebarButton = () => {
    if (sidebarActive) {
      return <button onClick={toggleSidebar} type="button" className="sidebar-fixed-toggler sidebar-fixed-toggler__active">
        <i className="fa fa-cog cog-icon" />
      </button>;
    }

    return <button onClick={toggleSidebar} type="button" className="sidebar-fixed-toggler">
    <i className="fa fa-cog cog-icon" />
  </button>;
  };

  return (
    <Container>
      <Row>
        <Col lg={9}>
          <Toolbox />
          <Row>
            <ProductsList products={products} xs={xs} md={md} lg={lg} />
            <div className="products__pagination d-flex justify-content-center">
              <Pagination>
                <Pagination.Prev id="prev" onClick={handlePageChange} />
                <Pagination.Item>{currentPage}</Pagination.Item>      
                <Pagination.Next id="next" onClick={handlePageChange} />
              </Pagination>
              </div>
          </Row>
        </Col>
        <Col lg={3} className="order-lg-first">
         {renderSidebar()}
          {renderSidebarButton()}
        </Col>
      </Row>
    </Container>
  );
}
