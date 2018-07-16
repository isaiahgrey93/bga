import styled from 'styled-components';

import { Link, } from 'react-router-dom';

import { colors, gradients, } from 'theme';

export const NavContainer = styled.div`
  width: 100%;
  height: 56px;
  background-image: ${gradients.header};
`;

export const NavContent = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1023px) {
    justify-content: center;
  }
`;

export const NavLogoContainer = styled.div`
  display: flex;
  alignitems: center;
  padding: 0px 16px;
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
