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

const Auth = () => (
  <Modal active>
    <ModalContentContainer>
      <SharedContentContainer>
        <HeaderContainer>
          <img alt={'Givelify Logo'} src={'/images/svg/givelify-logo.svg'} />
        </HeaderContainer>
      </SharedContentContainer>
      <MainContent>
        <Switch>
          <Route exact path={'/account/login'} component={DonorLogin} />
          <Route exact path={'/account/signup'} component={DonorSignup} />
          <Route component={DonorAuthLanding} />
        </Switch>
      </MainContent>
    </ModalContentContainer>
  </Modal>
);
export default Auth;
