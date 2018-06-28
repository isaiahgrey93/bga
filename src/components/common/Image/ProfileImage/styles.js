import styled from 'styled-components';

import { colors, shadows, } from 'theme';

import { shapes, sizes, } from './constants';

export const ProfileImage = styled.img`
  width: ${props => sizes[props.size]}px;
  height: ${props => sizes[props.size]}px;
  border-radius: ${(props) => {
    switch (props.shape) {
      case shapes.circle:
        return '50%';
      case shapes.rounded:
        return '5px';
      default:
        return '0px';
    }
  }};
  border: ${props => (props.bordered ? `1px solid ${colors.grey4}` : 'none')}
  box-shadow: ${props =>
    (props.raised ? shadows.get('default', 'medium') : 'none')};
`;
