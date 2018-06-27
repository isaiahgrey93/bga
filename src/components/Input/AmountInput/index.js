import React from 'react';
import PropTypes from 'prop-types';

import {
  Input as StyledInput,
  InputContainer as StyledInputContainer,
  TextSymbol as StyledTextSymbol,
} from './styles';

import parseAmount from './parseAmount';

class AmountInput extends React.Component {
  state = {
    focused: false,
  };

  onInputBlur = () => this.setState(() => ({ focused: false, }));
  onInputFocus = () => this.setState(() => ({ focused: true, }));

  render() {
    const { focused, } = this.state;
    const { value = '', symbol, ...props } = this.props;

    const formatted = parseAmount(value);

    return (
      <StyledInputContainer focused={focused}>
        <StyledTextSymbol>{symbol}</StyledTextSymbol>
        <StyledInput
          value={formatted}
          onBlur={this.onInputBlur}
          onFocus={this.onInputFocus}
          {...props}
        />
      </StyledInputContainer>
    );
  }
}

AmountInput.propTypes = {
  symbol: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, ]),
};

AmountInput.defaultProps = {
  symbol: undefined,
  value: undefined,
};

export default AmountInput;
