import React from 'react';
import PropTypes from 'prop-types';

import {
  Input as StyledInput,
  InputIcon as StyledInputIcon,
  InputContainer as StyledInputContainer,
} from './styles';

class Input extends React.Component {
  state = {
    focused: false,
  };

  onInputBlur = () => this.setState(() => ({ focused: false, }));
  onInputFocus = () => this.setState(() => ({ focused: true, }));

  render() {
    const { focused, } = this.state;
    const { value, icon, ...props } = this.props;

    return (
      <StyledInputContainer focused={focused}>
        {icon && <StyledInputIcon focused={focused}>{icon}</StyledInputIcon>}
        <StyledInput
          value={value}
          onBlur={this.onInputBlur}
          onFocus={this.onInputFocus}
          {...props}
        />
      </StyledInputContainer>
    );
  }
}

Input.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.func, ]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, ]),
};

Input.defaultProps = {
  icon: undefined,
  value: undefined,
};

export default Input;
