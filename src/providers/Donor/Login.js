import React from 'react';
import PropTypes from 'prop-types';

import api from 'api';

import { DataProvider } from 'providers';

const Login = ({ children, ...props }) => (
  <DataProvider request={api.donor.login} {...props}>
    {children}
  </DataProvider>
);

Login.propTypes = {
  children: PropTypes.func,
};

Login.defaultProps = {
  children: undefined,
};

export default Login;
