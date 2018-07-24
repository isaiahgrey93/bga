import styled from 'styled-components';

import { layout, } from 'theme';

const types = {
  church: '/images/svg/church.svg',
  nonprofit: '/images/svg/non_profit.svg',
};

const { breakpoints, } = layout;
const { mobile, tablet, desktop, } = breakpoints;

export const DoneeImageWrapper = styled.div`
  background-image: url(${props => types[props.type]});
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (max-width: ${mobile.max}px) {
    background-size: auto 60px;
  }
  @media screen and (min-width: ${tablet.min}px) and (max-width: ${tablet.max}px) {
    background-size: auto 60px;
  }
  @media screen and (min-width: ${desktop.min}px) {
    background-size: auto 80px;
  }
`;
