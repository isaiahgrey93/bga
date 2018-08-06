import React from 'react';
import PropTypes from 'prop-types';

import { Provider, Subscribe, } from 'unstated';
import { PersistContainer, } from 'unstated-persist';

import localForage from 'localforage';

import { DonorProfileEntity, } from 'api/entities';

class DonorProfileStore extends PersistContainer {
  persist = {
    version: '1.0',
    key: 'DonorProfile',
    storage: localForage,
  };

  state = new DonorProfileEntity();

  setProfile = (value, cb) =>
    this.setState(state => ({ ...state, ...value, }), () => cb && cb());
}

export const store = new DonorProfileStore();

const DonorProfile = ({ children, }) => (
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

DonorProfile.propTypes = {
  children: PropTypes.func,
};

DonorProfile.defaultProps = {
  children: undefined,
};

export default DonorProfile;
