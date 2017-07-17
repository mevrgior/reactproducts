import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import css from './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <nav className="menu left">
        <IndexLink to="/" className="menu__item" activeClassName="active">Business</IndexLink>
        <Link to="/cats" className="menu__item" activeClassName="active">Cats</Link>
        <Link to="/about" className="menu__item" activeClassName="active">About</Link>
      </nav>
      <div className="menu right">
        <a className="menu__item" href="#">
          Privacy & Terms
        </a>
        <a className="menu__item" href="#">
          Settings
        </a>
      </div>
    </div>
  );
};

export default Footer;