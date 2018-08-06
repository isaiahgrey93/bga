import React from 'react';
import PropTypes from 'prop-types';
import { Container, Provider, Subscribe } from 'unstated';

import { DonorProfileEntity } from 'api/entities';

class DonorProfileStore extends Container {
  state = new DonorProfileEntity();

  setProfile = (value, cb) =>
    this.setState(() => ({ ...value }), () => cb && cb());
}

const store = new DonorProfileStore();

const DonorProfile = ({ children, ...props }) => (
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
