import React from 'react';
import PropTypes from 'prop-types';

import { icons, } from 'components/common/Icon/constants';

import {
  Input as StyledInput,
  InputIcon as StyledInputIcon,
  InputIconContainer as StyledInputIconContainer,
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
    const {
      value, icon, iconActive, ...props
    } = this.props;

    return (
      <StyledInputContainer focused={focused}>
        {icon && (
          <StyledInputIconContainer>
            <StyledInputIcon
              size={'xSmall'}
              name={focused && iconActive ? iconActive : icon}
            />
          </StyledInputIconContainer>
        )}
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
  icon: PropTypes.oneOf(Object.keys(icons)),
  iconActive: PropTypes.oneOf(Object.keys(icons)),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, ]),
};

Input.defaultProps = {
  icon: undefined,
  iconActive: undefined,
  value: undefined,
};

export default Input;
