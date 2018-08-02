import React from 'react';
import PropTypes from 'prop-types';

import api from 'api';

import { DataProvider } from 'providers';

const DoneeOfferings = ({ donee, children, ...props }) => (
  <DataProvider params={{ donee }} request={api.donee.offerings} {...props}>
    {children}
  </DataProvider>
);

DoneeOfferings.propTypes = {
  donee: PropTypes.string.isRequired,
  children: PropTypes.func,
};

DoneeOfferings.defaultProps = {
  children: undefined,
};

export default DoneeOfferings;
