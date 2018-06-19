import React from 'react';
import PropTypes from 'prop-types';
import { SolidButton, OutlineButton, WrapperButton } from './styles';
import {
  buttonTypes,
  buttonColors,
  buttonDefaultType,
  buttonDefaultColor,
} from './constants';

const Button = ({ type, color, raised, value, children, ...props }) => {
  let ButtonComponent;

  switch (type) {
    case buttonTypes.solid:
      ButtonComponent = SolidButton;
      break;
    case buttonTypes.outline:
      ButtonComponent = OutlineButton;
      break;
    case buttonTypes.wrapper:
      ButtonComponent = WrapperButton;
      break;
    default:
      return null;
  }

  return (
    <ButtonComponent color={color} raised={raised} {...props}>
      {children || value}
    </ButtonComponent>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(Object.keys(buttonTypes)),
  color: PropTypes.oneOf(Object.keys(buttonColors)),
  depth: PropTypes.oneOf([0, 1, 2, 3]),
  raised: PropTypes.bool,
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
  type: buttonDefaultType,
  color: buttonDefaultColor,
  raised: false,
  depth: undefined,
  value: undefined,
  children: undefined,
};

export default Button;
