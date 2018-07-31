import styled from 'styled-components';

import { colors, fonts, } from 'theme';

import { Icon, } from 'components/common';

export const getInputContainerBorderColor = ({ focused, }) =>
  (focused ? colors.primaryBlue : colors.grey4);

export const getInputIconColor = ({ focused, }) =>
  (focused ? colors.primaryBlue : colors.grey3);

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${getInputContainerBorderColor};
  transition: border-bottom 250ms ease-in-out;
`;

export const InputIcon = styled(Icon)``;

export const InputIconContainer = styled.div`
  padding-right: 12px;
`;

export const Input = styled.input`
  width: 100%;
  height: 32px;
  font-size: 14px;
  padding: 0px;
  color: ${colors.black};
  caret-color: ${colors.black};
  font-family: ${fonts.fontFamily};
  outline: 0;
  border: none;
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
