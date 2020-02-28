import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header>
      <h3><Link to="/">Kamil Filip</Link></h3>
      <nav>
        <ul>
          <li>
            <Link to="/blog">blog</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;