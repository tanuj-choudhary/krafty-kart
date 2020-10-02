// Third party imports
import React from 'react';
import { Link } from 'react-router-dom';

// Styles and images
import './card.scss';

function Card({ heading, para, link, linkText }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center form-block px-20 py-70 px-xl-70 py-xl-80">
      <h2 className="form-block__heading mb-17">{heading}</h2>
      <p className="form-block__para mb-15">{para}</p>

      <Link to={link} className="form-block-btn mt-28 py-18 px-70">
        {linkText}
      </Link>
    </div>
  );
}

export default Card;
