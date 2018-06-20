import React from 'react';
import styled from 'styled-components';

const Centered = styled.div`
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2em 0px;
`;

export default story => <Centered>{story()}</Centered>;
