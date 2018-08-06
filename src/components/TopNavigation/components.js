import React from 'react';
import PropTypes from 'prop-types';

import { Text, } from 'components/common';
import { ViewportRenderer, } from 'components/layout';

import {
  NavLinkList,
  NavLink,
  NavMenuButton,
  NavMenuIcon,
  NavMenuIconBar,
} from './styles';
import { links, } from './constants';

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

export const NavMenuList = ({ authenticated, }) => (
  <ViewportRenderer desktop>
    <NavLinkList>
      {(authenticated ? links.authenticated : links.guest).map(({ text, path, }) => (
        <NavLink to={path} key={path}>
          <Text size={'small'} color={'white'}>
            {text}
          </Text>
        </NavLink>
        ))}
    </NavLinkList>
  </ViewportRenderer>
);

NavMenuList.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};
