import React from 'react';
import PropTypes from 'prop-types';

import { IconButton as StyledIconButton, } from './styles';
import {
  buttonSizes,
  shadowTypes,
  backgroundColors,
  defaultShadowType,
  defaultButtonSize,
  defaultColor,
} from './constants';

const IconButton = ({
  name, size, color, raised, ...props
}) => (
  <StyledIconButton size={size} color={color} raised={raised} {...props}>
    {name}
  </StyledIconButton>
);

IconButton.propTypes = {
  size: PropTypes.oneOf(Object.keys(buttonSizes)),
  color: PropTypes.oneOf(Object.keys(backgroundColors)),
  raised: PropTypes.oneOf(Object.keys(shadowTypes)),
  name: PropTypes.node.isRequired,
};

IconButton.defaultProps = {
  size: defaultButtonSize,
  color: defaultColor,
  raised: defaultShadowType,
};

export default IconButton;
