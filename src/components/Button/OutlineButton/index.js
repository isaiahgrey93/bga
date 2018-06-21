import React from 'react';
import PropTypes from 'prop-types';

import { OutlineButton as StyledOutlineButton } from './styles';
import {
  buttonSizes,
  buttonColors,
  defaultButtonSize,
  defaultButtonColor,
} from './constants';

const OutlineButton = ({ color, size, fluid, value, children, ...props }) => (
  <StyledOutlineButton size={size} color={color} fluid={fluid} {...props}>
    {children || value}
  </StyledOutlineButton>
);

OutlineButton.propTypes = {
  fluid: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(buttonSizes)),
  color: PropTypes.oneOf(Object.keys(buttonColors)),
  value: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

OutlineButton.defaultProps = {
  size: defaultButtonSize,
  color: defaultButtonColor,
  fluid: false,
  value: undefined,
  children: undefined,
};

export default OutlineButton;
