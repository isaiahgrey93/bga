import React from 'react';

import { Content, ContentContainer } from './styles';

export default ({ children, ...props }) => (
  <ContentContainer {...props}>
    <Content>{children}</Content>
  </ContentContainer>
);
