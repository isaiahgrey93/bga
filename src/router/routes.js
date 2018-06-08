import * as React from 'react';
import LoadableVisibility from 'react-loadable-visibility/react-loadable';

const Loading = () => <div>Loading...</div>;

export const Home = LoadableVisibility({
  loader: () => import('./Home'),
  loading: Loading,
});

export const Settings = LoadableVisibility({
  loader: () => import('./Settings'),
  loading: Loading,
});
