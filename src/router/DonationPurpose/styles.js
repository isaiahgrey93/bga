import styled from 'styled-components';

import { colors, layout } from 'theme';

import { Row } from 'components/common';
import { ContentLayout } from 'components/layout';

const { breakpoints } = layout;
const { desktop, tablet, mobile } = breakpoints;

export const PurposeListContainer = styled(ContentLayout)`
  background-color: ${colors.grey6};
  border-top: 1px solid ${colors.grey4};
`;

export const PurposeListContent = styled.div`
  width: 100%;
  height: 100%;
  @media screen and (max-width: ${mobile.max}px) {
    padding: 0 32px;
    min-height: calc(100vh - (80px + 56px));
  }

  @media screen and (min-width: ${tablet.min}px) and (max-width: ${tablet.max}px) {
    padding: 0 52px;
    min-height: calc(100vh - (80px + 56px));
  }

  @media screen and (min-width: ${desktop.min}px) {
    padding: 0 72px;
    min-height: calc(100vh - (80px + 56px));
  }
`;

export const PurposeSelectionContainer = styled(Row)`
  height: 72px;
  padding: 6px 0px;
  display: flex;
  align-items: flex-end;
`;

export const PurposeSelectionSectionLabel = styled.div`
  text-align: left;
`;
