import * as React from 'react';
import Loadable from 'react-loadable';

import { Text } from 'components/common';

import { Motion, spring } from 'react-motion';

const loadingStyle = {
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  color: '#fff',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ffffff',
};

const Loading = ({ children }) => (
  <Motion
    defaultStyle={{ showLoading: 0, showContent: 0 }}
    style={{
      showContent: spring(children ? 1 : 0),
      showLoading: spring(children ? 0 : 1, {
        stiffness: children ? 200 : 20,
      }),
    }}
  >
    {({ showContent, showLoading }) => (
      <div>
        <div style={{ ...loadingStyle, opacity: showLoading }}>
          <Text>Loading...</Text>
        </div>
        <div style={{ opacity: showContent, zIndex: 1, position: 'relative' }}>
          {children}
        </div>
      </div>
    )}
  </Motion>
);

export const DonationAmount = Loadable({
  loader: () => import('./DonationAmount'),
  loading: Loading,
  render(loaded, props) {
    console.log(loaded, props);
    return <Loading>{React.createElement(loaded.default, props)}</Loading>;
  },
});

export const DonationPurpose = Loadable({
  loader: () => import('./DonationPurpose'),
  loading: Loading,
  render(loaded, props) {
    console.log(loaded, props);
    return <Loading>{React.createElement(loaded.default, props)}</Loading>;
  },
});

export const DonationCheckout = Loadable({
  loader: () => import('./DonationCheckout'),
  loading: Loading,
  render(loaded, props) {
    console.log(loaded, props);
    return <Loading>{React.createElement(loaded.default, props)}</Loading>;
  },
});
