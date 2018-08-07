import React, { Fragment, } from 'react';
import { BrowserRouter, Route, Redirect, Switch, } from 'react-router-dom';

import { TopNavigation, PersistGate, } from 'components';

import {
  DonationAmount,
  DonationPurpose,
  DonationCheckout,
  DonationMemo,
  DonorAuthentication,
  DonorAddPaymentMethod,
  DonorForgotPassword,
} from './routes';

export default () => (
  <PersistGate>
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
            path={'/account/payment-methods/add'}
            component={DonorAddPaymentMethod}
          />
          <Route
            path={'/account/forgot-password'}
            component={DonorForgotPassword}
          />
          <Redirect to={'/donation/amount'} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  </PersistGate>
);
