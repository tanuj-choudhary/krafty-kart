/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Button } from 'react-bootstrap';

import './productSidebarView.scss';
import SidebarBlock from '../../views/sidebarBlock/SidebarBlocks';

 function ProductSidebarView({onInputChange}) {
  return (
    <form className="sidebar">
      <div className="filters mb-20 pt-6 pb-21">
        <label className="m-0">Filters:</label>
        <Button className="clear-button m-0 p-0 ml-100">Clean All</Button>
      </div>
      <SidebarBlock title="Category">
        <ul className="block-list pt-10 pb-20 m-0 pl-20">
          <li>
            <input  onChange={onInputChange} id="category" name="sports" type="checkbox" />
            <label> Sports</label>
          </li>
          <li>
            <input onChange={onInputChange} id="category" name="analog" type="checkbox" />
            <label> Analog</label>
          </li>
          <li>
            <input onChange={onInputChange} id="category" name="digital" type="checkbox" />
            <label> Digital</label>
          </li>
          <li>
            <input onChange={onInputChange} id="category" name="mechanical" type="checkbox" />
            <label>Mechanical</label>
          </li>
          <li>
            <input onChange={onInputChange} id="category" name="touchscreen" type="checkbox" />
            <label> Touchscreen</label>
          </li>
          <li>
            <input onChange={onInputChange} id="category" name="quartz" type="checkbox" />
            <label> Quartz</label>
          </li>
        </ul>
      </SidebarBlock>
      <SidebarBlock title="Size">
        <div className="filter-colors" />
        <ul className="block-list pt-10 pb-20 m-0 pl-20">
          <li>
            <input onChange={onInputChange} id="sizes" name="S" type="checkbox" />
            <label> S</label>
          </li>
          <li>
            <input onChange={onInputChange} id="sizes" name="M" type="checkbox" />
            <label> M</label>
          </li>
          <li>
            <input onChange={onInputChange} id="sizes" name="L" type="checkbox" />
            <label> L</label>
          </li>
          <li>
            <input onChange={onInputChange} id="sizes" name="XXL" type="checkbox" />
            <label> XXL</label>
          </li>
        </ul>
      </SidebarBlock>

      <SidebarBlock title="Colour">
        <ul className="color-list pt-10 pb-20 m-0 pl-20">
          <li>
            <a href="#1" style={{ background: 'rgb(184, 113, 69)' }}>
              {' '}
            </a>
          </li>
          <li>
            <a href="#1" style={{ background: 'rgb(240, 192, 74)' }}>
              {' '}
            </a>
          </li>
          <li>
            <a href="#1" style={{ background: 'rgb(51, 51, 51)' }}>
              {' '}
            </a>
          </li>
          <li>
            <a href="#1" style={{ background: 'rgb(204, 51, 51)' }}>
              {' '}
            </a>
          </li>
          <li>
            <a href="#1" style={{ background: 'rgb(51, 153, 204)' }}>
              {' '}
            </a>
          </li>
          <li>
            <a href="#1" style={{ background: 'rgb(102, 153, 51)' }}>
              {' '}
            </a>
          </li>
          <li>
            <a href="#1" style={{ background: 'rgb(242, 113, 156' }}>
              {' '}
            </a>
          </li>
          <li>
            <a href="#1" style={{ background: 'rgb(235, 235, 235' }}>
              {' '}
            </a>
          </li>
        </ul>
      </SidebarBlock>
      <SidebarBlock title="Brand">
        <ul className="block-list pt-10 pb-20 m-0 pl-20">
          <li>
            <input onChange={onInputChange} id="brand"  name="fasrack" type="checkbox" />
            <label>Fasrack</label>
          </li>
          <li>
            <input onChange={onInputChange} id="brand"  name="romex" type="checkbox" />
            <label>Romex</label>
          </li>
          <li>
            <input onChange={onInputChange} id="brand"  name="adibas" type="checkbox" />
            <label>Adibas</label>
          </li>
          <li>
            <input onChange={onInputChange} id="brand"  name="BREITLING" type="checkbox" />
            <label>Breitling</label>
          </li>
          <li>
            <input onChange={onInputChange} id="brand"  name="ghock" type="checkbox" />
            <label>Ghock</label>
          </li>
          <li>
            <input onChange={onInputChange} id="brand"  name="onega" type="checkbox" />
            <label>Onega</label>
          </li>
          <li>
            <input onChange={onInputChange} id="brand"  name="" type="checkbox" />
            <label>Nike</label>
          </li>
        </ul>
      </SidebarBlock>
    </form>
  );
}


export default ProductSidebarView;