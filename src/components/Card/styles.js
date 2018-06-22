import styled, { css, } from 'styled-components';

import { colors, shadows, } from 'theme';

const cardShadowMixin = css`
  transition: all 0.1s linear 0.1s;
  box-shadow: ${props =>
    (props.raised ? shadows.get('default', 'high') : 'none')};
  &:active {
    opacity: 0.8;
    transition: all 0.1s ease-in;
    box-shadow: ${props =>
    (props.raised ? shadows.get('default', 'none') : 'none')};
  }
`;

export const Card = styled.div`
  padding: 20px;
  min-height: 72px;
  border-radius: 8px;
  background-color: ${colors.white};
  ${cardShadowMixin};
`;
