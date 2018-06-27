import styled from 'styled-components';

import { colors, fonts, } from 'theme';

export const TextArea = styled.textarea`
  outline: 0;
  border: none;
  resize: none;
  width: 100%;
  font-size: 24px;
  padding: 8px;
  color: ${colors.black};
  font-family: ${fonts.fontFamily};
  background-color: transparent;
  &::placeholder {
    color: ${colors.grey3};
  }
  &::-moz-selection {
    color: ${colors.darkBlue};
  }
  &::selection {
    color: ${colors.darkBlue};
  }
`;
