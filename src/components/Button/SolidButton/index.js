import React from 'react';
import PropTypes from 'prop-types';

import { SolidButton as Button } from './styles';
import {
  buttonSizes,
  shadowTypes,
  backgroundColors,
  defaultShadowType,
  defaultButtonSize,
  defaultBackgroundColor,
} from './constants';

const SolidButton = ({ color, size, raised, value, children, ...props }) => (
  <Button size={size} color={color} raised={raised} {...props}>
    {children || value}
  </Button>
);

Button.propTypes = {
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

Button.defaultProps = {
  size: defaultButtonSize,
  color: defaultBackgroundColor,
  raised: defaultShadowType,
  value: undefined,
  children: undefined,
};

export default SolidButton;
