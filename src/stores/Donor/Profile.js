import React from 'react';
import PropTypes from 'prop-types';

import update from 'immutability-helper';

import { Provider, Subscribe } from 'unstated';
import Store from 'stores/Store';

import { store as WalletStore } from './Wallet';

import { DonorProfileEntity } from 'api/entities';

class DonorProfileStore extends Store {
  state = {
    value: new DonorProfileEntity(),
  };

  setProfile = (value, cb) =>
    this.setState(
      state => update(state, { value: { $set: value } }),
      () => cb && cb()
    );

  removeProfile = cb =>
    this.setState(
      state => update(state, { value: { $set: new DonorProfileEntity() } }),
      () => {
        WalletStore.resetWallet(() => cb && cb());
      }
    );
}

export const store = new DonorProfileStore({
  version: '1.0',
  key: 'DonorProfile',
});

const DonorProfile = ({ children }) => (
  <Provider>
    <Subscribe to={[store]}>
      {({ state }) =>
        children({
          state,
          store,
        })
      }
    </Subscribe>
  </Provider>
);

DonorProfile.propTypes = {
  children: PropTypes.func,
};

DonorProfile.defaultProps = {
  children: undefined,
};

export default DonorProfile;
