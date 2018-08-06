import React from 'react';
import PropTypes from 'prop-types';

import api from 'api';

import { DataProvider } from 'providers';

const FetchOfferings = ({ donee, children, ...props }) => (
  <DataProvider params={{ donee }} request={api.donee.offerings} {...props}>
    {children}
  </DataProvider>
);

FetchOfferings.propTypes = {
  donee: PropTypes.string.isRequired,
  children: PropTypes.func,
};

FetchOfferings.defaultProps = {
  children: undefined,
};

export default FetchOfferings;
