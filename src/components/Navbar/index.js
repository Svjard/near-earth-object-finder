import React from 'react';

import Logo from '../Logo';

import * as S from './styles';

const Navbar = () => {
  return (
    <S.Navbar>
      <S.NavbarContainer>
        <Logo />
        <S.NavbarTitle>Near Earth Object Finder</S.NavbarTitle>
      </S.NavbarContainer>
    </S.Navbar>
  );
};

export default Navbar;
