import styled from 'styled-components';

export const WrapperContainer = styled.div`
  position: relative;
`;

export const OffsetComponent = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  bottom: ${props => props.offset}px;
`;
