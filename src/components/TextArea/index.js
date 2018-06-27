import React from 'react';
import PropTypes from 'prop-types';

import { TextArea as StyledTextArea, } from './styles';

const TextArea = ({ value, ...props }) => (
  <StyledTextArea value={value} {...props} />
);

TextArea.propTypes = {
  value: PropTypes.string,
};

TextArea.defaultProps = {
  value: undefined,
};

export default TextArea;
