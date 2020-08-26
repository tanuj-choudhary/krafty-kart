import React from 'react';

import './footerBlock.scss';

export default function FooterBlock({ icon, title, para }) {
  const className = `${icon} mb-25`;

  return (
    <div className="footer-block mb-40 pt-43 pr-20 pb-0 pl-45">
      <i className={className} />
      <h6 className="mb-12">{title}</h6>
      <p className="mb-15">{para}</p>
    </div>
  );
}
