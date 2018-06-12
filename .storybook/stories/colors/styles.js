import styled from 'styled-components';
import { colors } from 'theme';

export const ColorSwatchesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ColorSwatchContainer = styled.div`
  width: 33%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const ColorSwatchShape = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background: ${props => props.color};
  box-shadow: 0 3px 8px 1px rgba(0, 0, 0, 0.1212);
`;

export const ColorSwatchDetail = styled.div`
  padding: 10px;
`;

export const ColorStyleDetail = styled.div`
  font-family: monospace;
  margin-top: 20px;
  background: ${colors.grey4};
  border-radius: 3px;
  padding: 4px 8px;
`;
