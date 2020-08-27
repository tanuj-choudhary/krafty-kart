import React from 'react';

import './accountBlock.scss';

export default function AccountBlock({ icon, title, collapse, children }) {
  const iconClass = `fas fa-${icon}`;

  function renderHelper() {
    if (!collapse) {
      return (
        <div className="account-block pb-12">
          <div className="account-block-detail pt-20 pr-12 pb-5 pl-24">
            <i className={iconClass} />
            <a href="#1" className="pl-20">
              {title}
            </a>
          </div>
          {children}
        </div>
      );
    }
    return (
      <div className="account-block pb-12">
        <div className="account-block-detail pt-20 pr-12 pb-5 pl-24">
          <i className={iconClass} />
          <a href="#1" className="pl-20">
            {title}
            <span>
              <i className="fas fa-arrow-right" />
            </span>
          </a>
          {children}
        </div>
      </div>
    );
  }

  return <div>{renderHelper()}</div>;
}
