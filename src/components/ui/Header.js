import React from 'react';
import logo from '../../img/logo.png';
import { StyledHeader } from '../../style';

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt='logo' />
    </StyledHeader>
  );
};

export default Header;
