import React from 'react';
import PropTypes from 'prop-types';

import {
  ToggleContainer as StyledToggleContainer,
  ToggleSlide as StyledToggleSlide,
  ToggleKnob as StyledToggleKnob,
} from './styles';

const Toggle = ({ active, onToggle, ...props }) => (
  <StyledToggleContainer onClick={onToggle} {...props}>
    <StyledToggleSlide active={active}>
      <StyledToggleKnob active={active} />
    </StyledToggleSlide>
  </StyledToggleContainer>
);

Toggle.propTypes = {
  active: PropTypes.bool,
  onToggle: PropTypes.func,
};

Toggle.defaultProps = {
  active: undefined,
  onToggle: undefined,
};

export default Toggle;
