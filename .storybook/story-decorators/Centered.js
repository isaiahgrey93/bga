import React from 'react';
import styled from 'styled-components';

const Centered = styled.div`
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default story => <Centered>{story()}</Centered>;
