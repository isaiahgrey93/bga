import styled, { css, } from 'styled-components';

import { shadows, } from 'theme';

import { bgColors, textColors, } from './constants';

const buttonShadowMixin = css`
  box-shadow: ${(props) => {
    let shadowColor;
    const { color, raised, } = props;

    if (color === 'primary' || color === 'secondary') {
      shadowColor = color;
    }

    if (raised) {
      return shadows.get(shadowColor, raised);
    }
  }};
  &:active {
    box-shadow: ${(props) => {
    let shadowColor;
    const { color, raised, } = props;

    if (color === 'primary' || color === 'secondary') {
      shadowColor = color;
    }

    if (raised) {
      return shadows.get(shadowColor, false);
    }
  }};
  }
`;

export const SolidButton = styled.button`
  outline: 0;
  border: none;
  padding: 12px 16px;
  border-radius: 18px;
  color: ${props => textColors[props.color]};
  background: ${props => bgColors[props.color]};
  ${buttonShadowMixin};
`;
