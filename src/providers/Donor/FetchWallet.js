import React from 'react';
import PropTypes from 'prop-types';

import api from 'api';

import { DataProvider, } from 'providers';

const FetchWallet = ({ donor, children, ...props }) => (
  <DataProvider params={{ donor, }} request={api.donor.wallet} {...props}>
    {children}
  </DataProvider>
);

FetchWallet.propTypes = {
  donor: PropTypes.string.isRequired,
  children: PropTypes.func,
};

FetchWallet.defaultProps = {
  children: undefined,
};

export default FetchWallet;
