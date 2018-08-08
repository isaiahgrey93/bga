import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { Modal } from 'components/common';

import { DonorLogin, DonorSignup, DonorAuthLanding } from 'router/routes';

import { DonorStore } from 'stores';

import {
  HeaderContainer,
  ModalContentContainer,
  SharedContentContainer,
  MainContent,
} from './styles';

import { AuthReferrerProvider } from './AuthReferrer';
import CloseModalButton from './CloseModalButton';
import AlreadyAuthenticated from './AlreadyAuthenticated';

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
};

const Auth = props => (
  <AuthReferrerProvider {...props}>
    <Modal active style={modalStyles}>
      <ModalContentContainer>
        <SharedContentContainer>
          <HeaderContainer>
            <img alt={'Givelify Logo'} src={'/images/svg/givelify-logo.svg'} />
          </HeaderContainer>
          <CloseModalButton {...props} />
        </SharedContentContainer>
        <MainContent>
          <DonorStore.Profile>
            {({ state: { value: donor }, store }) =>
              donor.id ? (
                <Route
                  render={() => (
                    <AlreadyAuthenticated
                      donor={donor}
                      onLogout={() => {
                        store.removeProfile();
                      }}
                      onContinue={() => {
                        const { history, location } = props;
                        const { state } = location || {};
                        const { referrer } = state || {};

                        referrer
                          ? history.replace(referrer)
                          : history.replace('/');
                      }}
                    />
                  )}
                />
              ) : null
            }
          </DonorStore.Profile>
          <Switch>
            <Route exact path={'/account/login'} component={DonorLogin} />
            <Route exact path={'/account/signup'} component={DonorSignup} />
            <Route exact path={'/account/auth'} component={DonorAuthLanding} />
          </Switch>
        </MainContent>
      </ModalContentContainer>
    </Modal>
  </AuthReferrerProvider>
);
export default Auth;
