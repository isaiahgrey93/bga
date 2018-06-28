import styled from 'styled-components';

import Row from 'components/common/Row';

import { colors, } from 'theme';

export const RadioOptionRow = styled(Row)`
  opacity: 1;
  height: 48px;
  cursor: pointer;
  margin: 8px 0px;
  transition: all 0.1s ease-in-out;
  &:active {
    opacity: 0.8;
    transition: all 0.1s ease-in-out;
  }
`;

export const RadioOptionButtonContainer = styled.div`
  width: 20px;
  height: 20px;
  max-width: 20px;
  max-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  border-color: ${props =>
    (props.selected ? colors.primaryBlue : colors.grey3)};
`;
export const RadioOptionButton = styled.div`
  width: ${props => (props.selected ? 10 : 1)}px;
  height: ${props => (props.selected ? 10 : 1)}px;
  max-width: 20px;
  max-height: 20px;
  border-radius: 5px;
  background-color: ${props =>
    (props.selected ? colors.primaryBlue : colors.transparent)};
  transition: all 0.15s ease-in-out;
`;
