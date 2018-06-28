import React from 'react';
import PropTypes from 'prop-types';

import RadioOption from 'components/common/Radio/RadioOption';

import { RadioGroup as StyledRadioGroup, } from './styles';
import { RadioOptionSeperator, } from './components';

const RadioGroup = ({
  selected, onSelect, children, options, ...props
}) => (
  <StyledRadioGroup {...props}>
    {children
      ? []
          .concat(children)
          .map((node, idx) => [
            node,
            <RadioOptionSeperator
              index={idx}
              nodes={children}
              key={`${node.props.value}-seperator`}
            />,
          ])
      : options &&
        options.map((option, idx) => [
          <RadioOption
            key={option.value}
            selected={selected}
            onSelect={onSelect}
            {...option}
          />,
          <RadioOptionSeperator
            index={idx}
            nodes={options}
            key={`${option.value}-seperator`}
          />,
        ])}
  </StyledRadioGroup>
);

RadioGroup.propTypes = {
  onSelect: PropTypes.func,
  selected: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape(RadioOption.propTypes)),
  children: PropTypes.arrayOf(PropTypes.node),
};

RadioGroup.defaultProps = {
  onSelect: undefined,
  selected: undefined,
  options: undefined,
  children: undefined,
};

export default RadioGroup;
