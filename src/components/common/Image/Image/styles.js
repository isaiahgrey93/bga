import styled from 'styled-components';

export const ImageWrapper = styled.div`
  width: 100%;
  transition: all 1s ease-out;
  opacity: ${props => (props.loaded ? 1 : 0)};
`;
