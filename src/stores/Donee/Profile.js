import React from 'react';
import PropTypes from 'prop-types';

import api from 'api';
import { DoneeProfileEntity, } from 'api/entities';
import { DataProvider, } from 'stores';

const DoneeProfileContext = React.createContext({});

const DoneeProfile = ({ donee, ...props }) => (
  <DataProvider
    params={{ donee, }}
    request={api.donee.profile}
    entity={DoneeProfileEntity}
    context={DoneeProfileContext}
    {...props}
  />
);

DoneeProfile.propTypes = {
  donee: PropTypes.string.isRequired,
};

DoneeProfile.defaultProps = {};

export default DoneeProfile;
