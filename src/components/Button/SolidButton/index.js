import React from 'react';
import PropTypes from 'prop-types';
import { SolidButton as Button, } from './styles';
import { bgColors, textColors, defaultColor, } from './constants';

const SolidButton = ({
  color, raised, value, children, ...props
}) => (
  <Button color={color} raised={raised} {...props}>
    {children || value}
  </Button>
);

Button.propTypes = {
  color: PropTypes.oneOf(Object.keys(bgColors)),
  raised: PropTypes.oneOf([0, 1, 2, 3, ]),
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
  color: defaultColor,
  raised: undefined,
  depth: undefined,
  value: undefined,
  children: undefined,
};

export default SolidButton;
