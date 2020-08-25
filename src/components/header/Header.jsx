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
            <Navbar.Brand href="#home">
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
              <Nav className="mt-16 p-19 m-lg-0 p-lg-0 ml-lg-auto">
                <Nav.Link
                  className="my-2 mx-5 py-7 px-10 m-lg-0 py-lg-41 px-lg-21"
                  href="#home"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  className="my-2 mx-5 py-7 px-10 m-lg-0 py-lg-41 px-lg-21"
                  href="#Account"
                >
                  Account
                </Nav.Link>
                <Nav.Link
                  className="my-2 mx-5 py-7 px-10 m-lg-0 py-lg-41 px-lg-21"
                  href="#Account"
                >
                  Shop
                </Nav.Link>
                <Nav.Link
                  className="my-2 mx-5 py-7 px-10 m-lg-0 py-lg-41 px-lg-21"
                  href="#Orders"
                >
                  Orders
                </Nav.Link>
                <Nav.Link
                  className="my-2 mx-5 py-7 px-10 m-lg-0 py-lg-41 px-lg-21"
                  href="#Wishlist"
                >
                  WishList
                </Nav.Link>
                <Nav.Link
                  className="my-2 mx-5 py-7 px-10 m-lg-0 py-lg-41 px-lg-21"
                  href="#home"
                >
                  Cart
                </Nav.Link>
                <Nav.Link
                  className="my-2 mx-5 py-7 px-10 m-lg-0 py-lg-41 px-lg-21"
                  href="#home"
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
