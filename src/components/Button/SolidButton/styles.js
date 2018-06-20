import styled, { css } from 'styled-components';

import { shadows } from 'theme';

import { backgroundColors, textColors, buttonSizes } from './constants';

const buttonShadowMixin = css`
  transition: all 0.1s linear 0.1s;
  box-shadow: ${props => {
    let shadowColor;
    const { color, raised } = props;

    if (color === 'primary' || color === 'secondary') {
      shadowColor = color;
    }

    if (raised) {
      return shadows.get(shadowColor, raised);
    }

    return 'none';
  }};
  &:active {
    opacity: 0.8;
    transition: all 0.1s ease-in;
    box-shadow: ${props => {
      let shadowColor;
      const { color, raised } = props;

      if (color === 'primary' || color === 'secondary') {
        shadowColor = color;
      }

      if (raised) {
        return shadows.get(shadowColor);
      }

      return 'none';
    }};
  }
`;

export const SolidButton = styled.button`
  outline: 0;
  border: none;
  font-family: 'Poppins';
  color: ${props => textColors[props.color]};
  padding: 8px ${props => buttonSizes[props.size].horizontal}px;
  font-size: ${props => buttonSizes[props.size].text}px;
  min-width: ${props => buttonSizes[props.size].container}px;
  min-height: ${props => buttonSizes[props.size].container}px;
  border-radius: ${props => buttonSizes[props.size].container}px;
  background: ${props => backgroundColors[props.color]};
  width: ${props => (props.fluid ? '100%' : 'auto')};
  ${buttonShadowMixin};
`;
