import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25vh;
  max-height: 25vh;
  padding: 18px;
  background: transparent;
`;

export const ModalContentContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

export const SharedContentContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 25vh;
  position: absolute;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContent = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
