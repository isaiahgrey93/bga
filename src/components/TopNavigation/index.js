import React from 'react';

import { ContentLayout } from 'components/layout';

import { NavContainer, NavContent, NavLogoContainer, NavLogo } from './styles';
import { NavMenuToggle, NavMenuList } from './components';

const notImplemented = () => alert('Not implemented!');

export default () => (
  <NavContainer>
    <ContentLayout>
      <NavContent>
        <NavMenuToggle onClick={notImplemented} />
        <NavLogoContainer>
          <NavLogo src={'/givelify-logo.svg'} />
        </NavLogoContainer>
        <NavMenuList />
      </NavContent>
    </ContentLayout>
  </NavContainer>
);
