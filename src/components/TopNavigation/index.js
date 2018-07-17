import React from 'react';

import { NavContainer, NavContent, NavLogoContainer, NavLogo } from './styles';
import { NavMenuToggle, NavMenuList } from './components';

const notImplemented = () => alert('Not implemented!');

export default () => (
  <NavContainer>
    <NavContent>
      <NavMenuToggle onClick={notImplemented} />
      <NavLogoContainer>
        <NavLogo alt={'Givelify Logo'} src={'/givelify-logo.svg'} />
      </NavLogoContainer>
      <NavMenuList />
    </NavContent>
  </NavContainer>
);
