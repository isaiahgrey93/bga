import React from 'react';
import PropTypes from 'prop-types';

import api from 'api';

import { DataProvider } from 'providers';

const FetchMemoTemplates = ({ donee, children, ...props }) => (
  <DataProvider params={{ donee }} request={api.donee.memoTemplates} {...props}>
    {children}
  </DataProvider>
);

FetchMemoTemplates.propTypes = {
  donee: PropTypes.string.isRequired,
  children: PropTypes.func,
};

FetchMemoTemplates.defaultProps = {
  children: undefined,
};

export default FetchMemoTemplates;
