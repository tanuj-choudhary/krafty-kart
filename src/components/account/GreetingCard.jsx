import React from 'react';
import { Image } from 'react-bootstrap';

import './greetingCard.scss';

export default function GreetingCard({ avatar, name }) {
  return (
    <div className="greeting">
      <div className="greeting-card p-12 mb-16">
        <Image className="avatar-img" src={avatar} roundedCircle />
        <div className="avatar-cap pl-16 pt-5">
          <h6>Hello,</h6>
          <h4 className="pt-3">{name}</h4>
        </div>
      </div>
    </div>
  );
}
