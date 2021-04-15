import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavbar } from '../../style';

const Navbar = () => {
  return (
    <StyledNavbar>
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
    </StyledNavbar>
  );
};

export default Navbar;
