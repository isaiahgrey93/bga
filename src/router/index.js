import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Donation } from 'stores';

import { TopNavigation } from 'components';

import { DonationAmount, DonationPurpose } from './routes';

import Transition from './Transition';

export default () => (
  <BrowserRouter>
    <Fragment>
      <TopNavigation />
      <Route
        render={({ location }) => (
          <Transition location={location}>
            <Switch location={location}>
              <Route
                exact
                path={'/donation/amount'}
                component={DonationAmount}
              />
              <Route
                exact
                path={'/donation/:type(envelope|cause)'}
                component={DonationPurpose}
              />
              <Redirect to={'/donation/amount'} />
            </Switch>
          </Transition>
        )}
      />
    </Fragment>
  </BrowserRouter>
);
