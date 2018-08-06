import React from 'react';
import PropTypes from 'prop-types';
import { Container, Provider, Subscribe, } from 'unstated';

import { DoneeProfileEntity, } from 'api/entities';

class DoneeProfileStore extends Container {
  state = new DoneeProfileEntity();

  setProfile = (value, cb) =>
    this.setState(() => ({ ...value, }), () => cb && cb());
}

const store = new DoneeProfileStore();

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
