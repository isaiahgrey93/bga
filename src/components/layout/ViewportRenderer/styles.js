import styled from 'styled-components';

const getDisplay = ({ visible, }) => (visible ? 'block' : 'none');

export const MobileRenderer = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: ${getDisplay} !important;
  }
`;

export const TabletRenderer = styled.div`
  display: none;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: ${getDisplay} !important;
  }
`;

export const DesktopRenderer = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: ${getDisplay} !important;
  }
`;
