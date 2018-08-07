import React from 'react';
import PropTypes from 'prop-types';

import { Provider, Subscribe, } from 'unstated';
import { PersistContainer, } from 'unstated-persist';

import localForage from 'localforage';

import { DonorWalletEntity, } from 'api/entities';

class DonorWalletStore extends PersistContainer {
  persist = {
    version: '1.0',
    key: 'DonorWallet',
    storage: localForage,
  };

  state = new DonorWalletEntity();

  setWallet = (value, cb) =>
    this.setState(state => ({ ...state, ...value, }), () => cb && cb());
}

export const store = new DonorWalletStore();

const DonorWallet = ({ children, }) => (
  <Provider>
    <Subscribe to={[store, ]}>
      {({ state, }) =>
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
