import React from 'react';
import PropTypes from 'prop-types';

import { WrapperButton, } from 'components';

import { Card as StyledCard, } from './styles';

const Card = ({
  children, value, onClick, ...props
}) => (
  <WrapperButton onClick={onClick}>
    <StyledCard clickable={!!onClick} {...props}>
      {children || value}
    </StyledCard>
  </WrapperButton>
);

Card.propTypes = {
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
  raised: undefined,
  onClick: undefined,
  value: undefined,
  children: undefined,
};

export default Card;
