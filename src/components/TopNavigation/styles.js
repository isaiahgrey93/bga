import styled from 'styled-components';

import { Link, } from 'react-router-dom';

import { ContentLayout, } from 'components/layout';
import { colors, gradients, layout, } from 'theme';

const { breakpoints, } = layout;
const { tablet, } = breakpoints;

export const NavContainer = styled(ContentLayout)`
  width: 100%;
  height: 56px;
  background-image: ${gradients.header};
`;

export const NavContent = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: ${tablet.max}px) {
    justify-content: center;
  }
`;

export const NavLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLogo = styled.img`
  width: 78px;
  height: 24px;
`;

export const NavLinkList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  padding: 6px 16px;
`;

export const NavMenuIcon = styled.div`
  width: 20px;
  height: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NavMenuIconBar = styled.div`
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background-color: ${colors.white};
`;

export const NavMenuButton = styled.button`
  width: 56px;
  height: 56px;
  cursor: pointer;
  top: 0;
  left: 0;
  position: absolute;
  border: none;
  outline: none;
  background-color: transparent;
  transition: all 0.1s linear;
  &:active {
    opacity: 0.7;
    transition: all 0.1s linear;
  }
`;
