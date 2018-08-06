import styled from 'styled-components';

import { fonts, shadows, } from 'theme';

import { backgroundColors, textColors, buttonSizes, } from './constants';

export const SolidButton = styled.button`
  outline: 0;
  border: none;
  font-family: ${fonts.fontFamily};
  color: ${props => textColors[props.color]};
  width: 100% !important;
  padding: 8px ${props => buttonSizes[props.size].horizontal}px;
  font-size: ${props => buttonSizes[props.size].text}px;
  min-width: ${props => buttonSizes[props.size].container}px;
  min-height: ${props => buttonSizes[props.size].container}px;
  border-radius: ${props => buttonSizes[props.size].container}px;
  background: ${props => backgroundColors[props.color]};
  box-shadow: ${props => shadows.get(props.color, props.raised)};
  transition: all 0.1s linear 0.1s;
  &:active {
    opacity: 0.8;
    transition: all 0.1s ease-in;
    box-shadow: ${shadows.get()};
  }
`;

export const SolidButtonWrapper = styled.div`
  background: {
    props=> props.color === 'transparent' ? 'transparent' : '#ffffff';
  }
  padding: 0px !important;
  transition: all 0.1s linear 0.1s;
  width: ${props => (props.fluid ? '100%' : 'auto')};
  min-width: ${props => buttonSizes[props.size].container}px;
  min-height: ${props => buttonSizes[props.size].container}px;
  border-radius: ${props => buttonSizes[props.size].container}px;
`;
