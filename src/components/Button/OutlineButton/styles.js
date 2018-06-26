import styled from 'styled-components';
import { fonts, } from 'theme';

import { buttonColors, buttonSizes, } from './constants';

export const OutlineButton = styled.button`
  outline: 0;
  font-family: ${fonts.fontFamily};
  color: ${props => buttonColors[props.color]};
  padding: 8px ${props => buttonSizes[props.size].horizontal}px;
  font-size: ${props => buttonSizes[props.size].text}px;
  min-width: ${props => buttonSizes[props.size].container}px;
  min-height: ${props => buttonSizes[props.size].container}px;
  border-radius: ${props => buttonSizes[props.size].container}px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => buttonColors[props.color]};
  background: transparent;
  width: ${props => (props.fluid ? '100%' : 'auto')};
  transition: all 0.1s linear 0.1s;
  &:active {
    opacity: 0.6;
    transition: all 0.1s ease-in;
  }
`;
