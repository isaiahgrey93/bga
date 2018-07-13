import * as React from 'react';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

export const Amounts = Loadable({
  loader: () => import('./Amounts'),
  loading: Loading,
});
