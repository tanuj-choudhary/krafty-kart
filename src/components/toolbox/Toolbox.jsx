import React from 'react';

import './toolbox.scss';

export default function Toolbox() {
  return (
    <div className="toolbox d-lg-flex justify-content-between mb-20">
      <div className="toolbox-left mb-10 mb-md-0">
        <div className="toolbox-info">
          Showing <span>12 of 47</span> products
        </div>
      </div>
      <div className="toolbox-right">
        <div className="toolbox-sort">
          <label className="mr-16 mb-0">Sort by :</label>
          <div className="sort-select ">
            <select
              className="sort-selector pt-4 pr-20 pb-4 pl-10"
              name="sort-by"
              id="sort-by"
            >
              <option value="popularity">Most Popular</option>
              <option value="rating">Most rated</option>
              <option value="date">Date</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
