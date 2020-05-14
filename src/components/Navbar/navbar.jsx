import React from 'react';
import { Link } from 'react-router-dom';
import LanguageButton from '../UI/languageButton';
import {injectIntl, FormattedMessage } from 'react-intl';


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/"><FormattedMessage id="UI.navbar.home" /></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/agency"><FormattedMessage id="UI.navbar.about" /></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/works"><FormattedMessage id="UI.navbar.studies" /></Link>
          </li>
        </ul>

        <LanguageButton />
      </nav>
    </div>
  );
}

export default injectIntl(Navbar);
