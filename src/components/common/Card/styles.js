import styled, { css, } from 'styled-components';

import { colors, shadows, } from 'theme';

import { rounding, } from './constants';

const cardShadowMixin = css`
  transition: all 0.1s linear 0.1s;
  box-shadow: ${props =>
    (props.raised ? shadows.get('default', 'high') : 'none')};
  &:active {
    transition: all 0.1s ease-in;
    box-shadow: ${props =>
    (props.clickable && props.raised
      ? shadows.get('default', 'none')
      : undefined)};
    opacity: ${props => props.clickable && 0.8};
  }
`;

export const Card = styled.div`
  opacity: 1;
  padding: 20px;
  min-height: 72px;
  border-radius: ${props => rounding[props.rounded]}px;
  background-color: ${colors.white};
  ${cardShadowMixin};
`;
