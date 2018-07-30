import styled from 'styled-components';

import { colors, layout, } from 'theme';

import { ContentLayout, } from 'components/layout';

const { breakpoints, } = layout;
const { tablet, desktop, } = breakpoints;

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

export const DonationMemoPreview = styled.div`
  border-top: 1px solid ${colors.grey4};
  border-bottom: 1px solid ${colors.grey4};
  margin: 12px 0px 48px 0px;
  padding: 30px 0px 30px 0px;
`;

export const CheckoutConfirmationContainer = styled.div`
  max-width: 384px;
  margin: 20px auto 60px auto;
`;
