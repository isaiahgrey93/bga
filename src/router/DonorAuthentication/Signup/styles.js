import styled from 'styled-components';

import { Link, } from 'react-router-dom';

import { Card, SolidButton, Text, } from 'components/common';

export const Container = styled.div`
  min-width: 100%;
  min-height: 100vh;
  padding-top: 20vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(
    180deg,
    #055bfd 0%,
    #07a2ff 50%,
    #ffffff 50%,
    #ffffff 100%
  );
`;

export const CenterContainer = styled.div`
  flex: 2;
  padding: 0px 18px;
  width: 434px;
  display: flex;
  align-items: center;
  max-width: 100%;
`;

export const FooterContainer = styled.div`
  width: 384px;
  max-width: 100%;
  padding: 4vh 18px;
`;

export const FormContainer = styled.div`
  width: 100%;
`;

export const FormHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormHeaderItem = styled.div`
  padding: 18px;
`;

export const FormHeaderItemText = styled(Text)`
  opacity: ${props => (props.active ? '1' : '0.5')};
`;

export const FormCard = styled(Card)`
  width: 100%;
  border-radius: 20px;
  padding-bottom: 24px;
`;

export const FormCardHeaderContainer = styled.div`
  padding: 0px 6px 6px;
`;

export const FormItem = styled.div`
  padding: 12px 9px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormSubmitContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormSubmit = styled(SolidButton)`
  width: 80%;
  margin: 0 auto;
`;

export const FormAlternateActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 12px;
`;

export const ConfirmationCard = styled(Card)`
  max-width: 480px;
  margin-left: 24px;
  margin-right: 24px;
`;

export const ConfirmationContent = styled.div`
  padding-bottom: 12px;
`;

export const ConfirmationTitle = styled.div`
  padding-bottom: 12px;
`;

export const ConfirmationMessage = styled.div`
  padding-top: 12px;
`;

export const ConfirmationSubmit = styled(SolidButton)`
  width: 70%;
  min-width: 240px;
  margin: 0 auto;
`;
