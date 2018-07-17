import React from 'react';
import PropTypes from 'prop-types';

import { Content, ContentContainer, } from './styles';

const ContentLayout = ({ children, ...props }) => (
  <ContentContainer {...props}>
    <Content>{children}</Content>
  </ContentContainer>
);

ContentLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default ContentLayout;
