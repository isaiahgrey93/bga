import React from 'react';

import { NavContainer, NavContent, NavLogoContainer, NavLogo, } from './styles';
import { NavMenuToggle, NavMenuList, } from './components';

export default () => (
  <NavContainer>
    <NavContent>
      <NavMenuToggle />
      <NavLogoContainer>
        <NavLogo alt={'Givelify Logo'} src={'/images/svg/givelify-logo.svg'} />
      </NavLogoContainer>
      <NavMenuList />
    </NavContent>
  </NavContainer>
);
