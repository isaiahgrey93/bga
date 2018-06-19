import styled from 'styled-components';
import { colors, gradients } from 'theme';

export const GradientSwatchesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const GradientSwatchContainer = styled.div`
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const GradientSwatchShape = styled.div`
  width: 100%;
  height: 120px;
  border-radius: 10px;
  background: ${props =>
    props.primary ? gradients.primary : gradients.secondary};
  box-shadow: 0 3px 8px 1px rgba(0, 0, 0, 0.1212);
`;

export const GradientSwatchDetail = styled.div`
  padding: 10px;
  font-family: 'Poppins';
`;

export const GradientStyleDetail = styled.div`
  font-family: monospace;
  margin-top: 20px;
  background: ${colors.grey4};
  border-radius: 3px;
  padding: 4px 8px;
`;
