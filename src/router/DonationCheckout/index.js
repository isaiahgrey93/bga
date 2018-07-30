import React, { Component, } from 'react';
import PropTypes from 'prop-types';

import Composer from 'react-composer';

import { Donation, Donee, } from 'stores';
import { DoneeDetailHeader, } from 'components';
import { Modal, SolidButton, } from 'components/common';

import {
  CheckoutContainer,
  CheckoutContent,
  CheckoutConfirmationContainer,
} from './styles';

import DonationList from './DonationList';
import CheckoutActions from './CheckoutActions';
import PaymentInfo from './PaymentInfo';
import PaymentMethodSelection from './PaymentMethodSelection';
import DonationFrequencySelection from './DonationFrequencySelection';

class DonationCheckout extends Component {
  state = {
    modals: {
      payment: false,
    },
  };

  modal = (modal, status) => () =>
    this.setState(state => ({
      modals: {
        ...state.modals,
        [modal]: status === undefined ? !state[modal] : status,
      },
    }));

  render() {
    const { modals, } = this.state;
    const { total, purposes, } = this.props;

    return (
      <div>
        <DoneeDetailHeader />
        <CheckoutContainer>
          <CheckoutContent>
            <DonationList total={total} purposes={purposes} />
            <CheckoutActions open={this.modal('frequency', true)} />
            <PaymentInfo open={this.modal('payment', true)} />
            <CheckoutConfirmationContainer>
              <SolidButton
                fluid
                size={'large'}
                raised={'high'}
                color={'secondary'}
                value={`Give ${total ? `$${total}` : ''}`}
              />
            </CheckoutConfirmationContainer>
          </CheckoutContent>
        </CheckoutContainer>
        <Modal active={modals.payment}>
          <PaymentMethodSelection close={this.modal('payment', false)} />
        </Modal>
        <Modal active={modals.frequency}>
          <DonationFrequencySelection close={this.modal('frequency', false)} />
        </Modal>
      </div>
    );
  }
}

DonationCheckout.propTypes = {
  total: PropTypes.string,
  purposes: PropTypes.array,
};

DonationCheckout.defaultProps = {
  total: undefined,
  purposes: undefined,
};

const DonationCheckoutContainer = () => (
  <Composer
    components={[
      <Donation.New />,
      <Donee.Offerings fetch donee={'1071226100775949'} />,
    ]}
  >
    {([donation, ]) => {
      const { purposes: _purposes = [], } = donation.state;

      const purposes = Object.values(_purposes);
      const total = purposes
        .reduce((acc, { amount = 0, }) => amount * 1 + acc, 0)
        .toFixed(2);

      return <DonationCheckout total={total} purposes={purposes} />;
    }}
  </Composer>
);

export default DonationCheckoutContainer;
