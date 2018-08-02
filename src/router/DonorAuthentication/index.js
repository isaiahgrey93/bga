import React from 'react';

import { Switch, Route, } from 'react-router-dom';

import { Modal, } from 'components/common';

import { DonorLogin, DonorSignup, DonorAuthLanding, } from 'router/routes';

import {
  HeaderContainer,
  ModalContentContainer,
  SharedContentContainer,
  MainContent,
} from './styles';

import CloseModalButton from './CloseModalButton';

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
};

const Auth = props => (
  <Modal active style={modalStyles}>
    <ModalContentContainer>
      <SharedContentContainer>
        <HeaderContainer>
          <img alt={'Givelify Logo'} src={'/images/svg/givelify-logo.svg'} />
        </HeaderContainer>
        <CloseModalButton {...props} />
      </SharedContentContainer>
      <MainContent>
        <Switch>
          <Route exact path={'/account/login'} component={DonorLogin} />
          <Route exact path={'/account/signup'} component={DonorSignup} />
          <Route exact path={'/account/auth'} component={DonorAuthLanding} />
        </Switch>
      </MainContent>
    </ModalContentContainer>
  </Modal>
);
export default Auth;
