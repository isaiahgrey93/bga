import styled from 'styled-components';

import { colors, layout } from 'theme';

import { ContentLayout } from 'components/layout';
import { ProfileImage } from 'components/common';

const { breakpoints } = layout;
const { desktop, tablet, mobile } = breakpoints;

export const DoneeInfoLayoutContainer = styled(ContentLayout)`
  height: 120px;
  background-color: ${colors.white};
`;

export const DoneeInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
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

export const DoneeInfoItem = styled.div`
  display: flex;
  align-items: center;
`;

export const DoneeLeftProfileImage = styled(ProfileImage).attrs({
  bordered: true,
  shape: 'circle',
})`
  position: relative;
  z-index: 1;
`;

export const DoneeRightProfileImage = styled(ProfileImage).attrs({
  bordered: true,
  shape: 'circle',
})`
  position: relative;
  right: 18px;
  z-index: 0;
`;

export const DoneeAmountLayoutContainer = styled(ContentLayout)`
  background-color: ${colors.grey6};
  border-top: 1px solid ${colors.grey4};
  @media screen and (max-width: ${mobile.max}px) {
    min-height: calc(100vh - (56px + 208px + 120px));
  }

  @media screen and (min-width: ${tablet.min}px) and (max-width: ${tablet.max}px) {
    min-height: calc(100vh - (56px + 208px + 120px));
  }

  @media screen and (min-width: ${desktop.min}px) {
    min-height: calc(100vh - (56px + 272px + 120px));
  }
`;
