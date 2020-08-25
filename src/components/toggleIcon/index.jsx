import React from 'react';

import menu from '../../images/menu.png';
import './toggleIcon.scss';

// Hamburger icon
export default function index() {
  return (
    <>
      <img
        className="navbar-toggler-icon navbar-toggler-icon-custom"
        src={menu}
        alt="toggle-button"
      />
    </>
  );
}
