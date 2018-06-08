import React, { Fragment, } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link, } from 'react-router-dom';

import { Home, Settings, } from './routes';

const Header = () => (
  <Fragment>
    <Link to={'/'}>Home</Link>
    &nbsp;
    <Link to={'/settings'}>Settings</Link>
  </Fragment>
);

export default () => (
  <BrowserRouter>
    <Fragment>
      <Header />
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/settings'} component={Settings} />
        <Redirect to={'/'} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);
