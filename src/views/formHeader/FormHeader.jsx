// Third Party imports
import React from 'react';

// Styles and images
import './formHeader.scss';
import bg from '../../images/grey2.jpg';

export default function FormHeader({ text }) {
  return (
    <div
      style={{
        backgroundImage: `url("${bg}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className="form-header"
    >
      {text}
    </div>
  );
}
