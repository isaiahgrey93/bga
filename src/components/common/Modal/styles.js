import styled, { injectGlobal, } from 'styled-components';

import ReactModal from 'react-modal';

export const Modal = styled(ReactModal)`
  border: none;
  outline: none;
  background-color: transparent;
`;

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  .ReactModal__Overlay {
    opacity: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: scroll;
  }
  .ReactModal__Overlay--after-open {
    opacity: 1;
    transition: opacity 200ms ease-in;
  }
  .ReactModal__Overlay--before-close {
    opacity: 0;
    transition: opacity 200ms ease-out 200ms;
  }
  .ReactModal__Content {
    opacity: 0;
    max-width: 100%;
  }
  .ReactModal__Content--after-open {
    opacity: 1;
    transition: opacity 200ms ease-in 200ms;
  }
  .ReactModal__Content--before-close {
    opacity: 0;
    transition: opacity 200ms ease-out;
  }
`;
