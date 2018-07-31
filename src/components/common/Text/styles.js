import styled, { css } from 'styled-components';

import { textSizes, textColors, textWeights, lineHeights } from './constants';

const noSelect = css`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Text = styled.span`
  color: ${props => textColors[props.color]};
  font-size: ${props => textSizes[props.size]}px;
  font-weight: ${props => textWeights[props.weight]};
  line-height: ${props => lineHeights[props.size]}px;
  ${props => (props.selectable ? '' : noSelect)};
`;
