import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Characters</Link>
        </li>
        <li>
          <Link to='/episodes'>Episodes</Link>
        </li>
        <li>
          <Link to='/quotes'>Quotes</Link>
        </li>
        <li>
          <Link to='/deaths'>Deaths</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
