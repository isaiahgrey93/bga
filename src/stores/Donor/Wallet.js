import React from 'react';
import PropTypes from 'prop-types';

import update from 'immutability-helper';

import { Provider, Subscribe } from 'unstated';
import Store from 'stores/Store';

import { DonorWalletEntity } from 'api/entities';

class DonorWalletStore extends Store {
  state = {
    list: new DonorWalletEntity(),
  };

  setWallet = (value, cb) =>
    this.setState(
      state => update(state, { list: { $set: value } }),
      () => cb && cb()
    );

  resetWallet = cb =>
    this.setState(
      state => update(state, { list: { $set: [] } }),
      () => cb && cb()
    );
}

export const store = new DonorWalletStore({
  version: '1.0',
  key: 'DonorWallet',
});

const DonorWallet = ({ children }) => (
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

DonorWallet.propTypes = {
  children: PropTypes.func,
};

DonorWallet.defaultProps = {
  children: undefined,
};

export default DonorWallet;
