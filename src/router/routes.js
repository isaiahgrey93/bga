import * as React from 'react';

import Loadable from 'react-loadable';

import { AppLoading } from 'components';

export const DonationAmount = Loadable({
  loader: () => import('./DonationAmount'),
  loading: AppLoading,
  render(loaded, props) {
    return (
      <AppLoading>{React.createElement(loaded.default, props)}</AppLoading>
    );
  },
});

export const DonationPurpose = Loadable({
  loader: () => import('./DonationPurpose'),
  loading: AppLoading,
  render(loaded, props) {
    return (
      <AppLoading>{React.createElement(loaded.default, props)}</AppLoading>
    );
  },
});

export const DonationCheckout = Loadable({
  loader: () => import('./DonationCheckout'),
  loading: AppLoading,
  render(loaded, props) {
    return (
      <AppLoading>{React.createElement(loaded.default, props)}</AppLoading>
    );
  },
});

export const DonationMemo = Loadable({
  loader: () => import('./DonationMemo'),
  loading: AppLoading,
  render(loaded, props) {
    return (
      <AppLoading>{React.createElement(loaded.default, props)}</AppLoading>
    );
  },
});

export const DonorAuthentication = Loadable({
  loader: () => import('./DonorAuthentication'),
  loading: AppLoading,
  render(loaded, props) {
    return (
      <AppLoading>{React.createElement(loaded.default, props)}</AppLoading>
    );
  },
});

export const DonorAuthLanding = Loadable({
  loader: () => import('./DonorAuthentication/AuthLanding'),
  loading: AppLoading,
  render(loaded, props) {
    return (
      <AppLoading>{React.createElement(loaded.default, props)}</AppLoading>
    );
  },
});

export const DonorLogin = Loadable({
  loader: () => import('./DonorAuthentication/Login'),
  loading: AppLoading,
  render(loaded, props) {
    return (
      <AppLoading>{React.createElement(loaded.default, props)}</AppLoading>
    );
  },
});
