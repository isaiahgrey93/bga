import styled, { css, } from 'styled-components';

import { colors, fonts, } from 'theme';

export const getInputContainerBorderColor = ({ focused, }) =>
  (focused ? colors.primaryBlue : colors.grey4);

export const InputContainer = styled.div`
  width: 100%;
  height: 56px;
  padding: 9px 18px;
  border-width: 2px;
  border-radius: 28px;
  border-style: solid;
  border-color: ${getInputContainerBorderColor};
  transition: border 250ms ease-in-out;
  background-color: transparent;
  display: flex;
  align-items: center;
`;

const AmountTextCSS = css`
  color: ${colors.black};
  font-weight: ${fonts.fontWeight.medium};
  font-family: ${fonts.fontFamily};
  caret-color: ${colors.black};
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

export const Input = styled.input`
  outline: 0;
  border: none;
  width: 100%;
  height: 42px;
  line-height: 24px;
  border-radius: 21px;
  font-size: 16px;
  background-color: transparent;
  ${AmountTextCSS};
`;

export const TextSymbol = styled.div`
  ${AmountTextCSS};
  margin-right: 4px;
  height: 42px;
  line-height: 24px;
  display: flex;
  align-items: center;
  padding-top: 1px;
`;
