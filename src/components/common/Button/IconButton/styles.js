import styled from 'styled-components';

import { shadows, } from 'theme';

import { backgroundColors, iconColors, sizes, } from './constants';

export const IconButton = styled.button`
  outline: 0;
  border: none;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => iconColors[props.color]};
  font-size: ${props => sizes[props.size].icon}px;
  min-width: ${props => sizes[props.size].container}px;
  min-height: ${props => sizes[props.size].container}px;
  max-width: ${props => sizes[props.size].container}px;
  max-height: ${props => sizes[props.size].container}px;
  border-radius: ${props => sizes[props.size].container}px;
  background: ${props => backgroundColors[props.color]};
  box-shadow: ${props => shadows.get(props.color, props.raised)};
  transition: all 0.1s ease-in;
  &:active {
    opacity: 0.8;
    transition: all 0.1s ease-in;
    box-shadow: ${shadows.get()};
  }
`;
