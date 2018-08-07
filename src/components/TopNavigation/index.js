import React from 'react';

import { DonorStore } from 'stores';

import { NavContainer, NavContent, NavLogoContainer, NavLogo } from './styles';
import { NavMenuToggle, NavMenuList } from './components';

export default () => (
  <DonorStore.Profile>
    {({ state, store }) => {
      const { id } = state.value;
      const authenticated = !!id;
      const logout = store.removeProfile;

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
            <NavMenuList authenticated={authenticated} onLogout={logout} />
          </NavContent>
        </NavContainer>
      );
    }}
  </DonorStore.Profile>
);
