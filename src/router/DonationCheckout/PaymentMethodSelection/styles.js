import styled from 'styled-components';

import { layout, } from 'theme';

import { IconButton, Text, } from 'components/common';

const { breakpoints, } = layout;
const { mobile, tablet, } = breakpoints;

export const PaymentMethodLabelContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: ${mobile.max}px) {
    width: 180px;
  }
  @media screen and (min-width: ${tablet.min}px) {
    width: 270px;
  }
`;

export const PaymentMethodLabel = styled(Text)`
  padding-left: 12px;
  padding-right: 20vw;
  @media screen and (max-width: ${mobile.max}px) {
    font-size: 14px !important;
  }
`;

export const OffsetDismissButton = styled(IconButton)`
  position: relative;
  top: 48px;
`;

export const PaymentModalActionDivider = styled.div`
  height: 1px;
  margin-bottom: 16px;
  background-color: #e1e3e6;
`;

export const PaymentModalActionTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
