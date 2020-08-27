import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import AccountBlock from './AccountBlock';
import GreetingCard from './GreetingCard';

import './account.scss';
import avatar from '../../images/avatars.svg';

export default function Account() {
  return (
    <div className="account-container py-40">
      <Container>
        <Row>
          <Col>
            <GreetingCard avatar={avatar} name="virat kohli" />
            <div className="account-blocks">
              <AccountBlock icon="people-carry" title="MY ORDERS" collapse />
              <AccountBlock icon="user-alt" title="ACCOUNT SETTINGS">
                <ul className="account-list">
                  <li>
                    <a href="#1">Profile Information</a>
                  </li>
                  <li>
                    <a href="#1">Manage Addresses</a>
                  </li>
                  <li>
                    <a href="#1">PAN Card Information</a>
                  </li>
                </ul>
              </AccountBlock>
              <AccountBlock icon="money-bill-alt" title="PAYMENTS">
                <ul className="account-list">
                  <li>
                    <a href="#1">Phone Pe Wallet</a>
                  </li>
                  <li>
                    <a href="#1">Gift Cards</a>
                  </li>
                  <li>
                    <a href="#1">Saved Cards</a>
                  </li>
                </ul>
              </AccountBlock>
              <AccountBlock icon="sms" title="MY CHATS" collapse />
              <AccountBlock icon="id-card" title="MY STUFF">
                <ul className="account-list">
                  <li>
                    <a href="#1">My Coupons</a>
                  </li>
                  <li>
                    <a href="#1">My Reviews & Ratings</a>
                  </li>
                  <li>
                    <a href="#1">All Notifications</a>
                  </li>
                  <li>
                    <a href="#1">My WishList</a>
                  </li>
                </ul>
              </AccountBlock>
              <AccountBlock icon="sign-out-alt" title="Logout" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
