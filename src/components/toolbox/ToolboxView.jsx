/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Field, reduxForm } from 'redux-form';

import './toolboxView.scss';

 function Toolbox({onSubmit}) {
  return (
    <form  className="toolbox d-lg-flex justify-content-between mb-20">
      <div className="toolbox-left mb-10 mb-md-0">
        <div className="toolbox-info">
          Showing <span>12 of 47</span> products
        </div>
      </div>
      <div className="toolbox-right">
        <div className="toolbox-sort">
          <label className="mr-16 mb-0">Sort by :</label>
          <div className="sort-select ">
            <Field onChange={onSubmit} className="sort-selector pt-4 pr-20 pb-4 pl-10" name="sort" component="select">
              <option value="avgRating">Most rated</option>
              <option value="updatedAt">Date</option>
              <option value="price">Price (low to high)</option>
              <option value="-price">Price (high to low)</option>
            </Field>
          </div>
        </div>
      </div>
    </form>
  );
}

const ToolBoxWrapper = reduxForm({
  form: 'products',
})(Toolbox);

export default ToolBoxWrapper;