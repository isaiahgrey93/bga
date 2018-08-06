import React from 'react';
import PropTypes from 'prop-types';

import api from 'api';

import { DataProvider } from 'providers';

const Signup = ({ children, ...props }) => (
  <DataProvider request={api.donor.signup} {...props}>
    {children}
  </DataProvider>
);

Signup.propTypes = {
  children: PropTypes.func,
};

Signup.defaultProps = {
  children: undefined,
};

export default Signup;
