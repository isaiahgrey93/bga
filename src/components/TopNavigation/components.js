import React from 'react';
import PropTypes from 'prop-types';

import { Text } from 'components/common';
import { ViewportRenderer } from 'components/layout';

import {
  NavLinkList,
  NavLink,
  NavLinkButton,
  NavMenuButton,
  NavMenuIcon,
  NavMenuIconBar,
} from './styles';
import { links } from './constants';

export const NavMenuToggle = props => (
  <ViewportRenderer mobile tablet>
    <NavMenuButton aria-label={'Menu Toggle'} {...props}>
      <NavMenuIcon>
        <NavMenuIconBar />
        <NavMenuIconBar />
        <NavMenuIconBar />
      </NavMenuIcon>
    </NavMenuButton>
  </ViewportRenderer>
);

export const NavMenuList = ({ authenticated, onLogout }) => (
  <ViewportRenderer desktop>
    <NavLinkList>
      {(authenticated ? links.authenticated : links.guest).map(
        ({ text, path }) => (
          <NavLink to={path} key={path}>
            <Text size={'small'} color={'white'}>
              {text}
            </Text>
          </NavLink>
        )
      )}
      {authenticated && (
        <NavLinkButton
          onClick={() => {
            console.log(onLogout);
            onLogout();
          }}
        >
          <Text size={'small'} color={'white'}>
            Logout
          </Text>
        </NavLinkButton>
      )}
    </NavLinkList>
  </ViewportRenderer>
);

NavMenuList.propTypes = {
  onLogout: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
};
