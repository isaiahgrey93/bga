import React from 'react';

import styled from 'styled-components';

const StoryHeader = styled.h3`
  position: absolute;
  top: 0;
  left: 0;
  padding: 12px;
  margin-top: 0px;
  margin-bottom: 0px;
  background-color: #ffffff;
  width: 100%;
  box-shadow: 0px 2px 4px 0px rgba(0, 40, 121, 0.1);
`;

const StoryWrapper = styled.div`
  margin-top: 40px;
`;

export default () => story => (
  <div>
    <StoryHeader>
      {story().props.context.kind}&nbsp;&nbsp;&rarr;&nbsp;&nbsp;{
        story().props.context.story
      }
    </StoryHeader>
    <StoryWrapper>{story()}</StoryWrapper>
  </div>
);
