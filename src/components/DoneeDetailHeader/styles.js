import styled from 'styled-components';

import { colors, layout } from 'theme';

import { ContentLayout } from 'components/layout';

const { breakpoints } = layout;
const { desktop, tablet, mobile } = breakpoints;

export const DetailHeaderContainer = styled(ContentLayout)`
  height: 80px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
`;

export const DetailHeaderContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  @media screen and (max-width: ${mobile.max}px) {
    padding: 0 32px;
  }
  @media screen and (min-width: ${tablet.min}px) and (max-width: ${tablet.max}px) {
    padding: 0 52px;
  }
  @media screen and (min-width: ${desktop.min}px) {
    padding: 0 72px;
  }
`;

export const DetailHeaderImageContainer = styled.span`
  margin-right: 12px;
`;
