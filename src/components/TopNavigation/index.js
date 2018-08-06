import React from 'react';

import { DonorStore, } from 'stores';

import { NavContainer, NavContent, NavLogoContainer, NavLogo, } from './styles';
import { NavMenuToggle, NavMenuList, } from './components';

export default () => (
  <DonorStore.Profile>
    {({ state, }) => {
      const { id, } = state;
      const authenticated = !!id;

      return (
        <NavContainer>
          <NavContent>
            <NavMenuToggle />
            <NavLogoContainer>
              <NavLogo
                alt={'Givelify Logo'}
                src={'/images/svg/givelify-logo.svg'}
              />
            </NavLogoContainer>
            <NavMenuList authenticated={authenticated} />
          </NavContent>
        </NavContainer>
      );
    }}
  </DonorStore.Profile>
);
