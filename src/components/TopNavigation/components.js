import React from 'react';

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

export const NavMenuList = () => (
  <ViewportRenderer desktop>
    <NavLinkList>
      {links.map(({ text, path, }) => (
        <NavLink to={path} key={path}>
          <Text size={'small'} color={'white'}>
            {text}
          </Text>
        </NavLink>
      ))}
    </NavLinkList>
  </ViewportRenderer>
);
