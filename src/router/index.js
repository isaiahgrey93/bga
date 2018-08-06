import React, { Fragment, } from 'react';
import { BrowserRouter, Route, Redirect, Switch, } from 'react-router-dom';

import { TopNavigation, } from 'components';

import {
  DonationAmount,
  DonationPurpose,
  DonationCheckout,
  DonationMemo,
  DonorAuthentication,
} from './routes';

export default () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route
          path={'/account/:authentication(auth|login|signup)'}
          render={() => null}
        />
        <TopNavigation />
      </Switch>
      <Switch>
        <Route path={'/donation/amount'} component={DonationAmount} />
        <Route
          component={DonationPurpose}
          path={'/donation/:type(envelope|cause)'}
        />
        <Route path={'/donation/memo'} component={DonationMemo} />
        <Route path={'/donation/checkout'} component={DonationCheckout} />
        <Route
          path={'/account/:authentication(auth|login|signup)'}
          component={DonorAuthentication}
        />
        <Route
          path={'/account/forgot-password'}
          render={() => 'Forgot Password'}
        />
        <Redirect to={'/donation/amount'} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);
