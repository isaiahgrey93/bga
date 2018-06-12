import styled from 'styled-components';
import { colors, fonts } from 'theme';

export const SectionTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  padding-right: 18px;
  border-radius: 3px;
  background: linear-gradient(135deg, #e1e3e6 0%, #c1c3c6 100%);
`;

export const FontStylesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 40px 0px;
`;

export const FontStyleContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const FontStyleDetail = styled.div`
  margin-top: 20px;
  background: ${colors.grey4};
  border-radius: 3px;
  padding: 4px 8px;
`;

export const FontStyleShowcase = styled.div`
  font-family: ${fonts.fontFamily};
  font-size: ${props => props.size}px;
  font-weight: ${props => props.weight};
  line-height: ${props => props.leading}px;
`;
