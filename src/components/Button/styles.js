import styled from 'styled-components';

import { shadows } from 'theme';

import { buttonColors } from './constants';

export const BaseButton = styled.button`
  padding: 12px 16px;
  border-radius: 18px;
  outline: 0;
  border: none;
  background: transparent;
  box-shadow: ${props => {
    let shadowColor;
    const { raised, depth, color } = props;

    if (color === 'primary') {
      shadowColor = 'primary';
    }

    if (color === 'secondary') {
      shadowColor = 'secondary';
    }

    if (!raised) return;

    return shadows.get(depth, shadowColor);
  }};
`;

export const SolidButton = styled(BaseButton)`
  background: ${props => buttonColors[props.color]};
`;

export const OutlineButton = styled(BaseButton)`
  background: transparent;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => buttonColors[props.color]};
`;

export const WrapperButton = styled(BaseButton)`
  margin: 0;
  padding: 0;
  width: auto;
  height: auto;
`;
