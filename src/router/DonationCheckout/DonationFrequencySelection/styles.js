import styled from 'styled-components';

import { layout, } from 'theme';

import { IconButton, Text, } from 'components/common';

const { breakpoints, } = layout;
const { mobile, tablet, } = breakpoints;

export const DonationFrequencyLabelContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: ${mobile.max}px) {
    width: 180px;
  }
  @media screen and (min-width: ${tablet.min}px) {
    width: 270px;
  }
`;

export const DonationFrequencyLabel = styled(Text)`
  padding-left: 12px;
  padding-right: 24px;
  @media screen and (max-width: ${mobile.max}px) {
    font-size: 14px !important;
  }
`;

export const OffsetDismissButton = styled(IconButton)`
  position: relative;
  top: 48px;
`;
