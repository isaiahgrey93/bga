import styled from 'styled-components';

import { colors, gradients, layout, } from 'theme';

import { ContentLayout, } from 'components/layout';
import { ProfileImage, SolidButton, Text, } from 'components/common';

const { breakpoints, } = layout;
const { desktop, tablet, mobile, } = breakpoints;

export const HeaderContainer = styled.div`
  background-color: ${colors.grey6};
  border-bottom: 1px solid ${colors.grey4};
`;

export const InfoLayoutContainer = styled(ContentLayout)`
  height: 120px;
  background-color: ${colors.white};
`;

export const InfoContainer = styled.div`
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

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoOrganizationTitle = styled(Text)`
  min-height: 24px;
`;

export const LeftProfileImage = styled(ProfileImage).attrs({
  bordered: true,
  shape: 'circle',
})`
  position: relative;
  z-index: 1;
  background-color: ${colors.white};
`;

export const RightProfileImage = styled(ProfileImage).attrs({
  bordered: true,
  shape: 'circle',
})`
  position: relative;
  right: 14px;
  z-index: 0;
`;

export const AmountLayoutContainer = styled(ContentLayout)`
  background-color: ${colors.grey6};
  border-top: 1px solid ${colors.grey4};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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

export const AmountContent = styled.div`
  width: 100%;
  padding: 64px 0px 72px 0px;

  @media screen and (max-width: ${mobile.max}px) {
    max-width: 352px;
  }

  @media screen and (min-width: ${tablet.min}px) and (max-width: ${tablet.max}px) {
    max-width: 368px;
  }

  @media screen and (min-width: ${desktop.min}px) {
    max-width: 384px;
  }
`;

export const AmountOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 18px 0px;
`;

export const AmountsLabelContainer = styled.div`
  margin: 6px 2%;
  text-align: center;
  @media screen and (min-width: ${desktop.min}px) {
    text-align: left;
  }
`;

export const AmountOptionButton = styled(SolidButton).attrs({
  fluid: true,
  color: 'blue',
  size: 'medium',
  raised: 'medium',
})`
  width: 90%;
  margin: 0 auto;

  background-image: ${props => props.active && gradients.primary};
`;

export const AmountOptionContainer = styled.div`
  min-width: 25%;
  max-width: 25%;
  margin: 6px 0px;

  @media screen and (max-width: ${mobile.max}px) {
    min-width: 33%;
    max-width: 33%;
  }
`;

export const CustomAmountButton = styled(SolidButton).attrs({
  fluid: true,
  color: 'muted',
  size: 'large',
})``;

export const GivingExperienceInfo = styled.div`
  width: 100%;
  padding: 32px 0px 72px 0px;

  @media screen and (max-width: ${mobile.max}px) {
    max-width: 352px;
  }

  @media screen and (min-width: ${tablet.min}px) and (max-width: ${tablet.max}px) {
    max-width: 368px;
  }

  @media screen and (min-width: ${desktop.min}px) {
    max-width: 384px;
  }
`;

export const GivingAppsLinks = styled.div`
  display: flex;
  justify-content: center;
`;

export const GivingAppPlatformStoreImage = styled.img`
  margin: 18px 6px;
`;
