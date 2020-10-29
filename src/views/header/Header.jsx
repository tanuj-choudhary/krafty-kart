// Third party imports
import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Project imports
import ToggleIcon from '../../components/toggleIcon';

// Style Sheet
import './header.scss';

 function Header() {
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
                  as={Link}
                  to="/"
                  className="my-2  py-7  m-lg-0 py-lg-41 px-lg-21"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/account"
                  className="my-2  py-7  m-lg-0 py-lg-41 px-lg-21"
                >
                  Account
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/products"
                  className="my-2  py-7  m-lg-0 py-lg-41 px-lg-21"
                >
                  Shop
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/orders"
                  className="my-2  py-7  m-lg-0 py-lg-41 px-lg-21"
                >
                  Orders
                </Nav.Link>
                
                <Nav.Link
                  as={Link}
                  to="/cart"
                  className="my-2  py-7  m-lg-0 py-lg-41 px-lg-21"
                >
                  Cart
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/login"
                  className="my-2  py-7  m-lg-0 py-lg-41 px-lg-21"
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/about"
                  className="my-2  py-7  m-lg-0 py-lg-41 px-lg-21"
                >
                  About us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;