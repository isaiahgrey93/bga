import React from 'react';
import PropTypes from 'prop-types';

import { Row as StyledRow, } from './styles';

const Row = ({ right, left, ...props }) => (
  <StyledRow {...props}>
    <div>{left}</div>
    <div>{right}</div>
  </StyledRow>
);

Row.propTypes = {
  right: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  left: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Row.defaultProps = {
  right: undefined,
  left: undefined,
};

export default Row;
