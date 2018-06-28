import React from 'react';
import PropTypes from 'prop-types';

import Divider from 'components/common/Divider';

export const RadioOptionSeperator = ({ index, nodes, }) =>
  (index !== nodes.length - 1 ? <Divider /> : null);

RadioOptionSeperator.propTypes = {
  index: PropTypes.number,
  nodes: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.node, PropTypes.object, ])),
};

RadioOptionSeperator.defaultProps = {
  index: undefined,
  nodes: [],
};
