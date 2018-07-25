import styled from 'styled-components';

import { colors, layout, } from 'theme';

import { Card, Row, } from 'components/common';
import { ContentLayout, } from 'components/layout';

const { breakpoints, } = layout;
const { desktop, tablet, mobile, } = breakpoints;

export const PurposeListContainer = styled(ContentLayout)`
  background-color: ${colors.grey6};
  border-top: 1px solid ${colors.grey4};
`;

export const PurposeListContent = styled.div`
  width: 100%;
  height: 100%;

  @media screen and (max-width: ${tablet.max}px) {
    padding: 0 0px;
    min-height: calc(100vh - (80px + 56px));
  }

  @media screen and (min-width: ${desktop.min}px) {
    padding: 0 78px;
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

export const PurposeSelectionListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 64px;
`;

export const PurposeSelectionListItem = styled.div`
  width: 48%;
  margin: 0px 0px 20px;
  @media screen and (max-width: ${mobile.max}px) {
    width: 100%;
  }
`;

export const PurposeSelectedTextContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const PurposeSelectionListItemText = styled(Row)`
  display: flex;
  &:first-child > div {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    &:first-child {
      flex: 1;
      max-width: 80%;
      text-align: left;
    }
    &:last-child {
      max-width: 20%;
      text-align: right;
    }
  }
`;

export const PurposeSelectionListItemContent = styled(Card)`
  display: flex;
`;
