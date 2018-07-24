import styled, { css, } from 'styled-components';

import { sizes, } from './constants';

const fluidSize = css`
  width: 100% !important;
  height: 100% !important;
  max-width: 100% !important;
  max-height: 100% !important;
`;

export const Icon = styled.img`
  max-width: ${props => sizes[props.size].icon}px !important;
  max-height: ${props => sizes[props.size].icon}px !important;
  ${props => props.fluid && fluidSize};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => sizes[props.size].icon}px !important;
  height: ${props => sizes[props.size].icon}px !important;
  ${props => props.fluid && fluidSize};
`;
