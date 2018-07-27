import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { TopNavigation } from 'components';

import { DonationAmount, DonationPurpose, DonationCheckout } from './routes';

export default () => (
  <BrowserRouter>
    <Fragment>
      <TopNavigation />
      <Switch>
        <Route exact path={'/donation/amount'} component={DonationAmount} />
        <Route
          exact
          path={'/donation/:type(envelope|cause)'}
          component={DonationPurpose}
        />
        <Route exact path={'/donation/checkout'} component={DonationCheckout} />
        <Redirect to={'/donation/amount'} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);
