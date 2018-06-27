import React from 'react';
import PropTypes from 'prop-types';

import { Icon as StyledIcon, } from './styles';

import { icons, } from './constants';

const Icon = ({ name, ...props }) => (
  <StyledIcon dangerouslySetInnerHTML={{ __html: icons[name], }} {...props} />
);

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(icons)),
};

Icon.defaultProps = {
  name: undefined,
};

export default Icon;
