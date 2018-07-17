import styled from 'styled-components';

import { layout } from 'theme';

const { breakpoints } = layout;
const { mobile, tablet, desktop } = breakpoints;

const getDisplay = ({ visible }) => (visible ? 'block' : 'none');

export const MobileRenderer = styled.div`
  display: none;
  @media screen and (max-width: ${mobile.max}px) {
    display: ${getDisplay} !important;
  }
`;

export const TabletRenderer = styled.div`
  display: none;
  @media screen and (min-width: ${tablet.min}px) and (max-width: ${tablet.max}px) {
    display: ${getDisplay} !important;
  }
`;

export const DesktopRenderer = styled.div`
  display: none;
  @media screen and (min-width: ${desktop.min}px) {
    display: ${getDisplay} !important;
  }
`;
