import * as React from 'react';
import Loadable from 'react-loadable';

const Loading = () => <div />;

export const DonationAmount = Loadable({
  loader: () => import('./DonationAmount'),
  loading: Loading,
});

export const DonationPurpose = Loadable({
  loader: () => import('./DonationPurpose'),
  loading: Loading,
});

export const DonationCheckout = Loadable({
  loader: () => import('./DonationCheckout'),
  loading: Loading,
});
