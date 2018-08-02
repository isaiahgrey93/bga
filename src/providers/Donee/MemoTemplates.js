import React from 'react';
import PropTypes from 'prop-types';

import api from 'api';

import { DataProvider } from 'providers';

const DoneeMemoTemplates = ({ donee, children, ...props }) => (
  <DataProvider params={{ donee }} request={api.donee.memoTemplates} {...props}>
    {children}
  </DataProvider>
);

DoneeMemoTemplates.propTypes = {
  donee: PropTypes.string.isRequired,
  children: PropTypes.func,
};

DoneeMemoTemplates.defaultProps = {
  children: undefined,
};

export default DoneeMemoTemplates;
