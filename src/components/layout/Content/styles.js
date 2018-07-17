import styled from 'styled-components';

import { layout, } from 'theme';

const { breakpoints, } = layout;
const { mobile, desktop, } = breakpoints;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 42px;
  padding-right: 42px;
  @media screen and (max-width: ${mobile.max}px) {
    padding-left: 18px;
    padding-right: 18px;
  }
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: inherit;
  flex-direction: inherit;
  justify-content: inherit;
  align-items: inherit;
  width: inherit;
  min-width: inherit;
  height: inherit;
  min-height: inherit;
  text-align: center;
  max-width: ${desktop.min}px;
`;
