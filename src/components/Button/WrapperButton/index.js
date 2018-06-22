import React from 'react';
import PropTypes from 'prop-types';

import { WrapperButton as StyledWrapperButton, } from './styles';

const WrapperButton = ({ children, value, ...props }) => (
  <StyledWrapperButton {...props}>{children || value}</StyledWrapperButton>
);

WrapperButton.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

WrapperButton.defaultProps = {
  value: undefined,
  children: undefined,
};

export default WrapperButton;
