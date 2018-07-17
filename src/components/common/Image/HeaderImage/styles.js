import styled from 'styled-components';

import { layout, } from 'theme';

const { breakpoints, } = layout;
const { mobile, tablet, desktop, } = breakpoints;

export const HeaderImage = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.source});

  @media screen and (max-width: ${mobile.max}px) {
    min-height: 208px;
  }

  @media screen and (min-width: ${tablet.min}px) and (max-width: ${tablet.max}px) {
    min-height: 208px;
  }

  @media screen and (min-width: ${desktop.min}px) {
    min-height: 272px;
  }
`;
