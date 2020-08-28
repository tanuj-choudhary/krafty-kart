import React from 'react';
import { Button } from 'react-bootstrap';

import './productSidebar.scss';
import SidebarBlock from './SidebarBlocks';

export default function ProductSidebar() {
  return (
    <div className="sidebar">
      <div className="filters mb-20 pt-6 pb-21">
        <label className="m-0">Filters:</label>
        <Button className="clear-button m-0 p-0 ml-150 ">Clean All</Button>
      </div>
      <SidebarBlock title="Category">
        <ul className="block-list pt-10 pb-20 m-0 pl-20">
          <li>
            <input type="checkbox" />
            <label> Sports</label>
          </li>
          <li>
            <input type="checkbox" />
            <label> Analog</label>
          </li>
          <li>
            <input type="checkbox" />
            <label> Digital</label>
          </li>
          <li>
            <input type="checkbox" />
            <label> Automatic</label>
          </li>
          <li>
            <input type="checkbox" />
            <label> Chronograph</label>
          </li>
          <li>
            <input type="checkbox" />
            <label> Dress</label>
          </li>
          <li>
            <input type="checkbox" />
            <label> Quartz</label>
          </li>
        </ul>
      </SidebarBlock>
      <SidebarBlock title="Category">
        <div className="filter-colors" />
        <ul className="block-list pt-10 pb-20 m-0 pl-20">
          <li>
            <input type="checkbox" />
            <label> S</label>
          </li>
          <li>
            <input type="checkbox" />
            <label> M</label>
          </li>
          <li>
            <input type="checkbox" />
            <label> l</label>
          </li>
          <li>
            <input type="checkbox" />
            <label> XL</label>
          </li>
          <li>
            <input type="checkbox" />
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
            <input type="checkbox" />
            <label>Next</label>
          </li>
          <li>
            <input type="checkbox" />
            <label> River Island</label>
          </li>
          <li>
            <input type="checkbox" />
            <label> Geox</label>
          </li>
          <li>
            <input type="checkbox" />
            <label> New Balance</label>
          </li>
          <li>
            <input type="checkbox" />
            <label> UGG</label>
          </li>
          <li>
            <input type="checkbox" />
            <label> F&F</label>
          </li>
          <li>
            <input type="checkbox" />
            <label> Nike</label>
          </li>
        </ul>
      </SidebarBlock>
    </div>
  );
}
