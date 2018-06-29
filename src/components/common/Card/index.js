import React from 'react';
import PropTypes from 'prop-types';

import { WrapperButton, } from 'components/common';

import { Card as StyledCard, } from './styles';
import { rounding, } from './constants';

const Card = ({
  children, value, rounded, onClick, ...props
}) => {
  const isClickable = !!onClick;

  return (
    <WrapperButton onClick={onClick}>
      <StyledCard clickable={isClickable} rounded={rounded} {...props}>
        {children || value}
      </StyledCard>
    </WrapperButton>
  );
};

Card.propTypes = {
  rounded: PropTypes.oneOf(Object.keys(rounding)),
  raised: PropTypes.bool,
  onClick: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Card.defaultProps = {
  rounded: 'small',
  raised: undefined,
  onClick: undefined,
  value: undefined,
  children: undefined,
};

export default Card;
