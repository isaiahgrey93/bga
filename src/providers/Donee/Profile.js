import React from 'react';
import PropTypes from 'prop-types';

import api from 'api';

import { DataProvider } from 'providers';

const DoneeProfile = ({ donee, children, ...props }) => (
  <DataProvider params={{ donee }} request={api.donee.profile} {...props}>
    {children}
  </DataProvider>
);

DoneeProfile.propTypes = {
  donee: PropTypes.string.isRequired,
  children: PropTypes.func,
};

DoneeProfile.defaultProps = {
  children: undefined,
};

export default DoneeProfile;
