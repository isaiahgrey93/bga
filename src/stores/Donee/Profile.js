import React from 'react';
import PropTypes from 'prop-types';
import { Container, Provider, Subscribe, } from 'unstated';

import api from 'api';
import { DoneeProfileEntity, } from 'api/entities';
import { DataProvider, } from 'stores';

class DoneeProfileStore extends Container {
  state = new DoneeProfileEntity();

  setProfile = value => this.setState(() => ({ ...value, }));
}

const store = new DoneeProfileStore();

const DoneeProfile = ({ donee, children, ...props }) => (
  <DataProvider
    store={store}
    params={{ donee, }}
    request={api.donee.profile}
    onComplete={store.setProfile}
    {...props}
  >
    {({ error, loading, }) => (
      <Provider>
        <Subscribe to={[store, ]}>
          {({ state, }) => children({
 state, store, error, loading,
})}
        </Subscribe>
      </Provider>
    )}
  </DataProvider>
);

DoneeProfile.propTypes = {
  donee: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};

DoneeProfile.defaultProps = {};

export default DoneeProfile;
