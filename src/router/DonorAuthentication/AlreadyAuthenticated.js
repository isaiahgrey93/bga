import React from 'react';

import styled from 'styled-components';

import {
  Card,
  Modal,
  OutlineButton,
  SolidButton,
  Text,
} from 'components/common';

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  content: {
    maxWidth: 360,
  },
};

const Spacer = styled.div`
    padding: ${props => props.size}px;'
`;

export default ({ donor, onLogout, onContinue }) => (
  <Modal active style={modalStyles}>
    <Card>
      <center>
        <Text>An account is already aleady logged in.</Text>
      </center>
      <Spacer size={18} />
      <OutlineButton color={'blue'} fluid size={'large'} onClick={onContinue}>
        Continue as {donor.name}
      </OutlineButton>
      <Spacer size={6} />
      <SolidButton fluid size={'large'} color={'muted'} onClick={onLogout}>
        Logout
      </SolidButton>
    </Card>
  </Modal>
);
