import styled from 'styled-components';

export const DonationTotalContainer = styled.div`
  padding: 36px 0px 12px 0px;
  opacity: 0.8;
`;

export const DonationListItem = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const DonationListItemAmountContainer = styled.div`
  padding: 0px 10px;
`;

export const DonationDescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: ${props => (props.active ? '24px' : '0px')};
  transition: left 0.2s ease-in;
`;

export const DonationRemoveAction = styled.div`
  overflow: hidden;
  position: absolute;
  opacity: 0;
  opacity: ${props => (props.active ? '1' : '0')};
  left: ${props => (props.active ? '-24px' : '-40px')};
  transition: opacity 0.2s ease-out 0.2s;
`;
