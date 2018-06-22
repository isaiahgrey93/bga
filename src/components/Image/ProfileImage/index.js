import React from 'react';
import PropTypes from 'prop-types';

import { ProfileImage as StyledProfileImage, } from './styles';

import { sizes, shapes, defaultSize, defaultShape, } from './constants';

const ProfileImage = ({
  size, shape, source, raised, bordered, ...props
}) => (
  <StyledProfileImage
    src={source}
    size={size}
    shape={shape}
    raised={raised}
    bordered={bordered}
    {...props}
  />
);

ProfileImage.propTypes = {
  source: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(sizes)),
  shape: PropTypes.oneOf(Object.keys(shapes)),
  raised: PropTypes.bool,
  bordered: PropTypes.bool,
};

ProfileImage.defaultProps = {
  size: defaultSize,
  shape: defaultShape,
  raised: undefined,
  bordered: undefined,
};

export default ProfileImage;
