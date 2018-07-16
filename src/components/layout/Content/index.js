import styled from 'styled-components';

const ContentLayout = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 1024px;
  padding-left: 42px;
  padding-right: 42px;
  @media screen and (max-width: 768px) {
    padding-left: 18px;
    padding-right: 18px;
  }
`;

export default ContentLayout;
