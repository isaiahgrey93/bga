import React from 'react';
import PropTypes from 'prop-types';

import { DoneeImageWrapper as StyledDoneeImageWrapper, } from './styles';

const DoneeImageWrapper = ({ type, children, ...props }) => (
  <StyledDoneeImageWrapper type={type} {...props}>
    {children}
  </StyledDoneeImageWrapper>
);

DoneeImageWrapper.propTypes = {
  type: PropTypes.oneOf(['church', 'nonprofit', ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

DoneeImageWrapper.defaultProps = {
  type: undefined,
  children: undefined,
};

export default DoneeImageWrapper;
