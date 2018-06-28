import React from 'react';
import PropTypes from 'prop-types';

import { HeaderImage as StyledHeaderImage, } from './styles';

const HeaderImage = ({ source, ...props }) => (
  <StyledHeaderImage source={source} {...props} />
);

HeaderImage.propTypes = {
  source: PropTypes.string.isRequired,
};

HeaderImage.defaultProps = {};

export default HeaderImage;
