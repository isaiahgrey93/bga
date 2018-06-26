import React from 'react';
import PropTypes from 'prop-types';

import { Modal as StyledModal, } from './styles';

import { defaults, } from './constants';

const ModalComponent = props => <StyledModal {...defaults} {...props} />;

const Modal = ({
  active, onClose, children, ...props
}) => (
  <ModalComponent isOpen={active} {...props}>
    {children}
  </ModalComponent>
);

Modal.propTypes = {
  active: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Modal.defaultProps = {
  active: false,
  onClose: undefined,
  children: undefined,
};

export default Modal;
