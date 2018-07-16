import React, { Fragment, } from 'react';
import { BrowserRouter, Route, Switch, Redirect, } from 'react-router-dom';

import { TopNavigation, } from 'components';

import { Amounts, } from './routes';

export default () => (
  <BrowserRouter>
    <Fragment>
      <TopNavigation />
      <Switch>
        <Route exact path={'/'} component={Amounts} />
        <Redirect to={'/'} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);
