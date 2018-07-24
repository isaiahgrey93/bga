import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/common/Icon';
import { IconButton as StyledIconButton, } from './styles';
import {
  sizes,
  shadowTypes,
  backgroundColors,
  defaultShadowType,
  defaultSize,
  defaultColor,
} from './constants';

const IconButton = ({
  name, size, color, raised, iconProps, ...props
}) => (
  <StyledIconButton size={size} color={color} raised={raised} {...props}>
    <Icon size={size} name={name} {...iconProps} />
  </StyledIconButton>
);

IconButton.propTypes = {
  size: PropTypes.oneOf(Object.keys(sizes)),
  color: PropTypes.oneOf(Object.keys(backgroundColors)),
  raised: PropTypes.oneOf(Object.keys(shadowTypes)),
  name: PropTypes.node.isRequired,
  iconProps: PropTypes.shape(Icon.propTypes),
};

IconButton.defaultProps = {
  size: defaultSize,
  color: defaultColor,
  raised: defaultShadowType,
  iconProps: {},
};

export default IconButton;
