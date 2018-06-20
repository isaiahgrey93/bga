import React from 'react';
import styled from 'styled-components';

const Centered = styled.div`
  min-width: 100%;
  min-height: calc(100vh - 86px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2em 0px;
  & > div {
    width: 100%;
  }
`;

export default story => <Centered>{story()}</Centered>;
