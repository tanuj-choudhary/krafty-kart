import React from 'react';

import './sidebarBlock.scss';

export default function SidebarBlock({ title, children }) {
  function renderHelper() {
    return (
      <div className="sidebar-block mb-20">
        <div className="sidebar-block-detail">
          <a href="#1" className="title pl-20 mb-10">
            {title}
            <span>
              <i className="fas fa-arrow-down" />
            </span>
          </a>
        </div>
        {children}
      </div>
    );
  }

  return <div>{renderHelper()}</div>;
}
