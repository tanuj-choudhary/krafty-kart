// Third party imports
import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

// Project imports
import ToggleIcon from '../toggleIcon';

// Style Sheet
import './header.scss';

export default function Header() {
  return (
    <Container className="header-container" fluid>
      <Row>
        <Col className="py-22 px-15 px-lg-120 py-lg-0">
          <Navbar sticky="top" expand="lg">
            <Navbar.Brand href="/">
              <span className="brand-a">KRAFTY</span>{' '}
              <span className="brand-b">KART</span>
            </Navbar.Brand>

            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="navbar-toggler-custom"
            >
              <ToggleIcon />
            </Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className=" mt-16 p-19 m-lg-0 p-lg-0 ml-lg-auto">
                <Nav.Link
                  href="/"
                  className="my-2 mx-5 py-7 px-10 m-lg-0 py-lg-41 px-lg-21"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="/account"
                  className="my-2 mx-5 py-7 px-10 m-lg-0 py-lg-41 px-lg-21"
                >
                  Account
                </Nav.Link>
                <Nav.Link
                  href="/products"
                  className="my-2 mx-5 py-7 px-10 m-lg-0 py-lg-41 px-lg-21"
                >
                  Shop
                </Nav.Link>
                <Nav.Link
                  href="/orders"
                  className="my-2 mx-5 py-7 px-10 m-lg-0 py-lg-41 px-lg-21"
                >
                  Orders
                </Nav.Link>
                <Nav.Link
                  href="/wishlist"
                  className="my-2 mx-5 py-7 px-10 m-lg-0 py-lg-41 px-lg-21"
                >
                  WishList
                </Nav.Link>
                <Nav.Link
                  href="/cart"
                  className="my-2 mx-5 py-7 px-10 m-lg-0 py-lg-41 px-lg-21"
                >
                  Cart
                </Nav.Link>
                <Nav.Link
                  href="/login"
                  className="my-2 mx-5 py-7 px-10 m-lg-0 py-lg-41 px-lg-21"
                >
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}
