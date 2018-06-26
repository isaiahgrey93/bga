import styled from 'styled-components';

import {
  activeSlideBackgroundColor,
  inActiveSlideBackgroundColor,
  activeSlideBorderColor,
  inActiveSlideBorderColor,
  activeKnobBackgroundColor,
  inActiveKnobBackgroundColor,
  activeKnobPosition,
  inActiveKnobPosition,
} from './constants';

export const ToggleContainer = styled.div`
  display: flex;
  width: 48px;
  height: 30px;
  max-width: 48px;
  max-height: 30px;
  align-items: center;
  justify-content: center;
`;

export const ToggleSlide = styled.div`
  position: relative;
  width: 36px;
  height: 18px;
  max-width: 36px;
  max-height: 18px;
  border-radius: 10px;
  transition: all ease-in-out 0.2s;
  border: 1px solid
    ${props =>
    (props.active ? activeSlideBorderColor : inActiveSlideBorderColor)};
  background-color: ${props =>
    (props.active ? activeSlideBackgroundColor : inActiveSlideBackgroundColor)};
`;

export const ToggleKnob = styled.div`
  width: 24px;
  height: 24px;
  bottom: -3.5px;
  position: absolute;
  border-radius: 15px;
  box-shadow: 0 2px 4px 0 rgba(0, 40, 121, 0.15);
  transition: all ease-in-out 0.2s;
  background-color: ${props =>
    (props.active ? activeKnobBackgroundColor : inActiveKnobBackgroundColor)};
  left: ${props => (props.active ? activeKnobPosition : inActiveKnobPosition)};
`;
