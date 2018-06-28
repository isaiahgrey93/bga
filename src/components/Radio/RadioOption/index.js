import React from 'react';
import PropTypes from 'prop-types';

import {
  RadioOptionRow as StyledRadioOptionRow,
  RadioOptionButton as StyledRadioOptionButton,
  RadioOptionButtonContainer as StyledRadioButtonOptionContainer,
} from './styles';

const RadioOption = ({
  label, value, selected, onSelect, ...props
}) => {
  const isSelected = value && selected && value === selected;

  return (
    <StyledRadioOptionRow
      left={label}
      right={
        <StyledRadioButtonOptionContainer selected={isSelected}>
          <StyledRadioOptionButton selected={isSelected} />
        </StyledRadioButtonOptionContainer>
      }
      onClick={() => onSelect && onSelect(value)}
      {...props}
    />
  );
};

RadioOption.propTypes = {
  label: PropTypes.node,
  value: PropTypes.string,
  selected: PropTypes.string,
  onSelect: PropTypes.func,
};

RadioOption.defaultProps = {
  label: 'Twice a month (1st & 16th)',
  value: undefined,
  selected: undefined,
  onSelect: undefined,
};

export default RadioOption;
