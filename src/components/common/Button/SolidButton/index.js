import React from 'react';
import PropTypes from 'prop-types';

import {
  SolidButton as StyledSolidButton,
  SolidButtonWrapper as StyledSolidButtonWrapper,
} from './styles';
import {
  buttonSizes,
  shadowTypes,
  backgroundColors,
  defaultShadowType,
  defaultButtonSize,
  defaultColor,
} from './constants';

const SolidButton = ({
  color,
  size,
  raised,
  fluid,
  value,
  children,
  ...props
}) => (
  <StyledSolidButtonWrapper
    size={size}
    color={color}
    raised={raised}
    fluid={fluid}
    {...props}
  >
    <StyledSolidButton
      size={size}
      color={color}
      raised={raised}
      fluid={fluid}
      {...props}
    >
      {children || value}
    </StyledSolidButton>
  </StyledSolidButtonWrapper>
);

SolidButton.propTypes = {
  fluid: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(buttonSizes)),
  color: PropTypes.oneOf(Object.keys(backgroundColors)),
  raised: PropTypes.oneOf(Object.keys(shadowTypes)),
  value: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

SolidButton.defaultProps = {
  size: defaultButtonSize,
  color: defaultColor,
  raised: defaultShadowType,
  fluid: false,
  value: undefined,
  children: undefined,
};

export default SolidButton;
