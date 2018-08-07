import styled from 'styled-components';

import Image from '../Image';

import { colors, shadows } from 'theme';

import { shapes, sizes } from './constants';

export const ProfileImage = styled(Image)`
  width: ${props => sizes[props.size]}px !important;
  height: ${props => sizes[props.size]}px !important;
  border-radius: ${props => {
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
    props.raised ? shadows.get('default', 'medium') : 'none'};
    background-image: url(https://dev.givelify.com/data/donee/logo/478/5cdb424…_w.png);
    background-image: url(${props => props.source});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`;
