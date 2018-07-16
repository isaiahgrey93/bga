import React from 'react';
import PropTypes from 'prop-types';

import api from 'api';
import { DoneeProfileEntity } from 'api/entities';
import { DataStore, DataProvider } from 'stores';

const DoneeProfileStore = new DataStore({ initial: new DoneeProfileEntity() });

const DoneeProfile = ({ donee, ...props }) => (
  <DataProvider
    params={{ donee }}
    request={api.donee.profile}
    store={DoneeProfileStore}
    {...props}
  />
);

DoneeProfile.propTypes = {
  donee: PropTypes.string.isRequired,
};

DoneeProfile.defaultProps = {};

export default DoneeProfile;
