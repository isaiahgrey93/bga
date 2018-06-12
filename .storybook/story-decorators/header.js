import React from 'react';

import styled from 'styled-components';

const StoryWrapper = styled.h1`
  margin-top: 0px;
  margin-bottom: 40px;
  color: #ffffff;
  background: linear-gradient(135deg, #303030 0%, #3b3b3b 100%);
  padding: 12px;
  border-radius: 3px;
`;

export default ({ title }) => story => (
  <div>
    <StoryWrapper>{title}</StoryWrapper>
    {story()}
  </div>
);
