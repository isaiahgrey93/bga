import React from 'react';
import PropTypes from 'prop-types';

import { TransitionGroup, CSSTransition, } from 'react-transition-group';

const Transition = ({ children, location, }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} timeout={300} classNames={'fade'}>
      {children}
    </CSSTransition>
  </TransitionGroup>
);

Transition.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  location: PropTypes.object.isRequired,
};

export default Transition;
