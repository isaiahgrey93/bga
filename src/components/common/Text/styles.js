import styled, { css, } from 'styled-components';

import { textSizes, textColors, textWeights, lineHeights, } from './constants';

const noSelect = css`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Text = styled.span.attrs({
  style: ({ size, color, weight, }) => ({
    color: textColors[color],
    fontSize: textSizes[size],
    fontWeight: textWeights[weight],
    lineHeight: `${lineHeights[size]}px`,
  }),
})`
  ${props => (props.selectable ? '' : noSelect)};
`;
