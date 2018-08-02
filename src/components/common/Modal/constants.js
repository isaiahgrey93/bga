import ReactModal from 'react-modal';

ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.75)';

export const defaults = {
  ariaHideApp: false,
  closeTimeoutMS: 400,
  parentSelector: () => document.body,
};
