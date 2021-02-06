import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

export const Header = () => (
  <header className="header">
    <h1 className="header__title">
      Rick and Morty
    </h1>

    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item">
          <NavLink
            to="/characters"
            className="header__nav-link"
            activeClassName="header__nav-link--active"
          >
            Characters
          </NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink
            to="/episodes"
            className="header__nav-link"
            activeClassName="header__nav-link--active"
          >
            Episodes
          </NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink
            to="/locations"
            className="header__nav-link"
            activeClassName="header__nav-link--active"
          >
            Locations
          </NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink
            to="/watch-list"
            className="header__nav-link"
            activeClassName="header__nav-link--active"
          >
            My watch list
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
