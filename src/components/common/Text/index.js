import React from 'react';
import PropTypes from 'prop-types';

import { Text as StyledText, } from './styles';

import {
  defaultTextSize,
  defaultTextWeight,
  defaultTextColor,
  textSizes,
  textColors,
  textWeights,
} from './constants';

const Text = ({
  size, color, weight, value, children, ...props
}) => (
  <StyledText size={size} color={color} weight={weight} {...props}>
    {children || value}
  </StyledText>
);

Text.propTypes = {
  size: PropTypes.oneOf(Object.keys(textSizes)),
  color: PropTypes.oneOf(Object.keys(textColors)),
  weight: PropTypes.oneOf(Object.keys(textWeights)),
  value: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Text.defaultProps = {
  size: defaultTextSize,
  color: defaultTextColor,
  weight: defaultTextWeight,
  value: undefined,
  children: undefined,
};

export default Text;
