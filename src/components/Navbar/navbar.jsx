import React from 'react';
import { Link } from 'react-router-dom';
import LanguageButton from '../UI/languageButton';
import {injectIntl, FormattedMessage } from 'react-intl';


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/agency">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/works">works</Link>
          </li>
        </ul>

        <LanguageButton />
      </nav>
    </div>
  );
}

export default injectIntl(Navbar);
