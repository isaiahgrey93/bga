import styled from 'styled-components';

import { colors, layout, } from 'theme';

import { ContentLayout, } from 'components/layout';

const { breakpoints, } = layout;
const { tablet, desktop, } = breakpoints;

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
  @media screen and (max-width: ${tablet.max}px) {
    padding: 0;
  }

  @media screen and (min-width: ${desktop.min}px) {
    padding: 0 78px;
  }
`;

export const DetailHeaderImageContainer = styled.span`
  margin-right: 12px;
`;
