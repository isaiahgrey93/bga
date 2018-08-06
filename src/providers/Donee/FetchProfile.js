import React from 'react';
import PropTypes from 'prop-types';

import api from 'api';

import { DataProvider } from 'providers';

const FetchProfile = ({ donee, children, ...props }) => (
  <DataProvider params={{ donee }} request={api.donee.profile} {...props}>
    {children}
  </DataProvider>
);

FetchProfile.propTypes = {
  donee: PropTypes.string.isRequired,
  children: PropTypes.func,
};

FetchProfile.defaultProps = {
  children: undefined,
};

export default FetchProfile;
