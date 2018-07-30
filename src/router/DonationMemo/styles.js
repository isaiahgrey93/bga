import styled from 'styled-components';

import { ContentLayout, } from 'components/layout';
import { SolidButton, WrapperButton, TextArea, } from 'components/common';

export const MemoContainer = styled(ContentLayout)`
  display: flex;
  justify-content: center;
`;

export const MemoContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 640px;
  width: 100%;
`;

export const MemoSelectionContainer = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const MemoTemplateContainer = styled.div`
  padding: 6px;
`;

export const MemoInput = styled(TextArea)`
  min-height: 240px;
  margin-bottom: 24px;
  margin-top: 12px;
`;

export const MemoSubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MemoSubmit = styled(SolidButton).attrs({
  fluid: true,
  color: 'primary',
  size: 'large',
  raised: 'high',
})`
  max-width: 400px;
`;

export const MemoClear = styled(WrapperButton)`
  padding: 24px;
  margin-top: 24px;
  max-width: 400px;
`;
