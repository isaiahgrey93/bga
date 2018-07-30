import styled from 'styled-components';

import { WrapperButton, } from 'components/common';

export const PaymentInfoContainer = styled.div`
  max-width: 384px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 0px 24px 0px;
`;

export const PaymentInfoPreview = styled.div`
  display: flex;
  align-items: center;
`;

export const PaymentInfoCardPreview = styled.div`
  padding: 0 12px;
`;

export const PaymentLink = styled(WrapperButton)`
  text-decoration: none;
`;
