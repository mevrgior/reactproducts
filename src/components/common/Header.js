import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <div className="header">
      <div className="menu right">
        <a className="menu__item" href="#">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default Header;