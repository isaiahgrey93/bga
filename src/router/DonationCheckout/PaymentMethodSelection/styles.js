import styled from 'styled-components';

import { IconButton, Text, } from 'components/common';

export const PaymentMethodLabelContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PaymentMethodLabel = styled(Text)`
  min-width: 240px;
  padding-left: 12px;
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
