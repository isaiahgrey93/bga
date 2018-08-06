import React from 'react';
import PropTypes from 'prop-types';

import { Provider, Subscribe, } from 'unstated';
import { PersistContainer, } from 'unstated-persist';

import localForage from 'localforage';

import { DoneeProfileEntity, } from 'api/entities';

class DoneeProfileStore extends PersistContainer {
  persist = {
    version: '1.0',
    key: 'DoneeProfile',
    storage: localForage,
  };

  state = new DoneeProfileEntity();

  setProfile = (value, cb) =>
    this.setState(() => ({ ...value, }), () => cb && cb());
}

export const store = new DoneeProfileStore();

const DoneeProfile = ({ children, }) => (
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

DoneeProfile.propTypes = {
  children: PropTypes.func,
};

DoneeProfile.defaultProps = {
  children: undefined,
};

export default DoneeProfile;
