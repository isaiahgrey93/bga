import React from 'react';
import PropTypes from 'prop-types';

import { Provider, Subscribe } from 'unstated';
import Store from 'stores/Store';

import { DonorProfileEntity } from 'api/entities';

class DonorProfileStore extends Store {
  state = new DonorProfileEntity();

  setProfile = (value, cb) =>
    this.setState(state => ({ ...state, ...value }), () => cb && cb());
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
