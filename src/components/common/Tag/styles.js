import styled from 'styled-components';
import { fonts } from 'theme';

import { backgroundColors, textColors, tagSizes } from './constants';

export const Tag = styled.span`
  display: inline-block;
  font-family: ${fonts.fontFamily};
  color: ${props => textColors[props.color]};
  padding: ${props => tagSizes[props.size].vertical}px
    ${props => tagSizes[props.size].horizontal}px;
  font-size: ${props => tagSizes[props.size].text}px;
  min-width: ${props => tagSizes[props.size].container}px;
  min-height: ${props => tagSizes[props.size].container}px;
  border-radius: ${props => tagSizes[props.size].container}px;
  background: ${props => backgroundColors[props.color]};
`;
