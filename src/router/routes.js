import * as React from 'react';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

export const Home = Loadable({
  loader: () => import('./Home'),
  loading: Loading,
});

export const Settings = Loadable({
  loader: () => import('./Settings'),
  loading: Loading,
});
