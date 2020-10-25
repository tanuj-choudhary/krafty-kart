import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AccountBlock from './AccountBlock';
import GreetingCard from './GreetingCard';

import './accountView.scss';
import avatar from '../../images/avatars.svg';


export default function Account({ user,handleLogout }) {
  
  const renderHelper = () => {
    if (!user) {
      return <div>Loading...</div>;
    }

      return <div className="account-container py-40">
      <Container>
        <Row>
          <Col>
            <GreetingCard avatar={avatar} name={user.firstName} />
            <div className="account-blocks">
              <AccountBlock linkAddress="/account/orders" icon="people-carry" title="MY ORDERS" collapse />
              <AccountBlock icon="user-alt" title="ACCOUNT SETTINGS">
                <ul className="account-list">
                  <li>
                    <Link to={{pathname:'/account/profile'}}>Profile Information</Link>
                  </li>
                  <li>
                    <Link to={{pathname:'/account/address'}}>Manage Addresses</Link>
                  </li>
                  <li>
                    <a href="#pancard" >PAN Card Information</a>
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
                <button onClick={handleLogout} type="button" className="logout-btn">
                    <AccountBlock icon="sign-out-alt" title="Logout" />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>;

  };


  return renderHelper();
}
