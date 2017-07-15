import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import css from './header.css';

const Header = () => {
  return (
    <div className="header">
      <nav className="main-menu left">
        <IndexLink to="/" className="main-menu__item" activeClassName="active">Home</IndexLink>
        <Link to="/cats" className="main-menu__item" activeClassName="active">Cats</Link>
        <Link to="/about" className="main-menu__item" activeClassName="active">About</Link>
      </nav>
      <div className="main-menu right">
        <a className="main-menu__item" href="#">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default Header;