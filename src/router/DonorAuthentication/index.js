import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { Modal } from 'components/common';

import { DonorLogin, DonorAuthLanding } from 'router/routes';

const Auth = () => (
  <Modal active>
    <Switch>
      <Route exact path={'/account/login'} component={DonorLogin} />
      <Route component={DonorAuthLanding} />
    </Switch>
  </Modal>
);
export default Auth;
