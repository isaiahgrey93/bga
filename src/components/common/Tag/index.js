import React from 'react';
import PropTypes from 'prop-types';

import { Tag as StyledTag, } from './styles';
import {
  tagSizes,
  backgroundColors,
  defaultTagSize,
  defaultColor,
} from './constants';

const Tag = ({
  color, size, value, children, ...props
}) => (
  <StyledTag size={size} color={color} {...props}>
    {children || value}
  </StyledTag>
);

Tag.propTypes = {
  size: PropTypes.oneOf(Object.keys(tagSizes)),
  color: PropTypes.oneOf(Object.keys(backgroundColors)),
  value: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Tag.defaultProps = {
  size: defaultTagSize,
  color: defaultColor,
  value: undefined,
  children: undefined,
};

export default Tag;
