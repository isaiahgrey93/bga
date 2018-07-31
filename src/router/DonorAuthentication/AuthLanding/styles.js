import styled from 'styled-components';

import { Text, } from 'components/common';

import { gradients, } from 'theme';

export const LandingContainer = styled.div`
  min-width: 100%;
  min-height: 100vh;
  padding-top: 25vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background: ${gradients.default};
`;

export const CenterContainer = styled.div`
  flex: 2;
  padding: 4vh 18px;
  width: 384px;
  max-width: 100%;
`;

export const FooterContainer = styled.div`
  width: 384px;
  max-width: 100%;
  padding: 4vh 18px;
`;

export const FacebookButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FacebookButtonText = styled(Text)`
  color: #3b5998;
`;
