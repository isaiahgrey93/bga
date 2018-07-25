import styled from 'styled-components';
import { Link, } from 'react-router-dom';

import { colors, layout, } from 'theme';

import { WrapperButton, } from 'components/common';
import { ContentLayout, } from 'components/layout';

import { Text as StyledText, } from 'components/common/Text/styles';

const { breakpoints, } = layout;
const { mobile, tablet, desktop, } = breakpoints;

export const CheckoutContainer = styled(ContentLayout)`
  background-color: ${colors.white};
  border-top: 1px solid ${colors.grey4};
  display: flex;
  flex-direction: column;
`;

export const CheckoutContent = styled.div`
  @media screen and (max-width: ${tablet.max}px) {
    padding: 0 0px;
    min-height: calc(100vh - (80px + 56px));
  }

  @media screen and (min-width: ${desktop.min}px) {
    padding: 0 78px;
    min-height: calc(100vh - (80px + 56px));
  }
`;

export const CheckoutLineItem = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
`;

export const CheckoutTotalContainer = styled.div`
  padding: 36px 0px 12px 0px;
  opacity: 0.8;
`;

export const CheckoutLineItemAmountContainer = styled.div`
  padding: 0px 10px;
`;

export const CheckoutActionsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media screen and (max-width: 420px) {
    justify-content: space-between;
  }
`;

export const CheckoutActionButton = styled(WrapperButton)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px 0px;
  padding: 32px 24px;
  opacity: 0.9;
  transition: all 0.1s ease-out;
  &:active {
    opacity: 0.5;
    transition: all 0.1s ease-in;
  }
  @media screen and (max-width: ${mobile.max}px) {
    margin: 0px;
    padding: 18px 0px;
    & > ${StyledText} {
      font-size: 12px !important;
    }
  }
`;

export const CheckoutPaymentContainer = styled.div`
  width: 384px;
  margin: 0 auto;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 48px 0px 24px 0px;
`;

export const PaymentInfoPreview = styled.div`
  display: flex;
  align-items: center;
`;

export const PaymentInfoCardPreview = styled.div`
  padding: 0 12px;
`;

export const EditPaymentLink = styled(Link)`
  text-decoration: none;
`;

export const CheckoutConfirmationContainer = styled.div`
  margin: 60px 0px;
`;
