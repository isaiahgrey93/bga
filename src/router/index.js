import React, { Fragment, } from 'react';
import { BrowserRouter, Route, Switch, Redirect, } from 'react-router-dom';

import { Amounts, } from './routes';

export default () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path={'/'} component={Amounts} />
        <Redirect to={'/'} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);
