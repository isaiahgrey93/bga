import styled from 'styled-components';

export const HeaderImage = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.source});
`;
