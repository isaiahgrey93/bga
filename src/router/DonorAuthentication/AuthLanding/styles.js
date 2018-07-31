import styled from 'styled-components';

import { gradients } from 'theme';

export const LandingContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background: ${gradients.default};
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10vh 18px;
  box-sizing: content-box;
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
