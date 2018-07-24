import styled from 'styled-components';

import { colors, } from 'theme';

import { ContentLayout, } from 'components/layout';

export const DetailHeaderContainer = styled(ContentLayout)`
  height: 80px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  margin: 0 auto;
`;

export const DetailHeaderContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const DetailHeaderImageContainer = styled.span`
  margin-right: 12px;
`;
