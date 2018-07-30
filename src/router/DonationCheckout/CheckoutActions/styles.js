import styled from 'styled-components';

import { layout, } from 'theme';

import { WrapperButton, } from 'components/common';
import { Text as StyledText, } from 'components/common/Text/styles';

const { breakpoints, } = layout;
const { mobile, } = breakpoints;

export const CheckoutActionButtonContainer = styled.div`
  width: 33%;
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

export const CheckoutActionSpacer = styled.div`
  height: 8px;
`;
