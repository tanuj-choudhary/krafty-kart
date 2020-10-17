import React from 'react';
import {Link} from 'react-router-dom';

import './accountBlock.scss';

export default function AccountBlock({ icon, title, collapse, children,linkAddress }) {
  const iconClass = `fas fa-${icon}`;

  
  function renderHelper() {
    if (!collapse) {
      return (
        <div className="account-block pb-12">
          <div className="account-block-detail pt-20 pr-12 pb-5 pl-24">
            <i className={iconClass} />
            <Link to={{pathname:linkAddress}} className="pl-20">
              {title}
            </Link>
          </div>
          {children}
        </div>
      );
    }
    return (
      <div className="account-block pb-12">
        <div className="account-block-detail pt-20 pr-12 pb-5 pl-24">
          <i className={iconClass} />
          <Link to={{pathname:linkAddress}} className="pl-20">
            {title}
            <span>
              <i className="fas fa-arrow-right" />
            </span>
          </Link>
          {children}
        </div>
      </div>
    );
  }

  return <div>{renderHelper()}</div>;
}
