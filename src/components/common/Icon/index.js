import React from 'react';
import PropTypes from 'prop-types';

import { Icon as StyledIcon, Container as StyledContainer, } from './styles';

import { icons, sizes, defaultSize, } from './constants';

const Icon = ({
  name, size, fluid, ...props
}) => (
  <StyledContainer fluid={fluid} size={size}>
    <StyledIcon fluid={fluid} size={size} src={icons[name]} {...props} />
  </StyledContainer>
);

Icon.propTypes = {
  fluid: PropTypes.bool,
  name: PropTypes.oneOf(Object.keys(icons)),
  size: PropTypes.oneOf(Object.keys(sizes)),
};

Icon.defaultProps = {
  fluid: false,
  name: undefined,
  size: defaultSize,
};

export default Icon;
