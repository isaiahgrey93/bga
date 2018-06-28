import styled from 'styled-components';

import { textSizes, textColors, textWeights, lineHeights, } from './constants';

export const Text = styled.span.attrs({
  style: ({ size, color, weight, }) => ({
    color: textColors[color],
    fontSize: textSizes[size],
    fontWeight: textWeights[weight],
    lineHeight: `${lineHeights[size]}px`,
  }),
})``;
