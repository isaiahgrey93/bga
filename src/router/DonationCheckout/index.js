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
    const { amount, selected, } = this.props;

    return (
      <div>
        <DoneeDetailHeader />
        <CheckoutContainer>
          <CheckoutContent>
            <DonationList amount={amount} selected={selected} />
            <CheckoutActions />
            <PaymentInfo open={this.modal('payment', true)} />
            <CheckoutConfirmationContainer>
              <SolidButton
                fluid
                size={'large'}
                raised={amount ? 'high' : 'none'}
                disabled={!amount}
                style={{ opacity: amount ? 1 : 0.5, }}
                color={amount ? 'secondary' : 'muted'}
                value={`Give ${amount ? `$${amount}` : ''}`}
              />
            </CheckoutConfirmationContainer>
          </CheckoutContent>
        </CheckoutContainer>
        <Modal active={modals.payment}>
          <PaymentMethodSelection close={this.modal('payment', false)} />
        </Modal>
      </div>
    );
  }
}

DonationCheckout.propTypes = {
  amount: PropTypes.string,
  selected: PropTypes.object,
};

DonationCheckout.defaultProps = {
  amount: undefined,
  selected: undefined,
};

const DonationCheckoutContainer = () => (
  <Composer
    components={[
      <Donation.New />,
      <Donee.Offerings fetch donee={'1071226100775949'} />,
    ]}
  >
    {([donation, ]) => {
      const { amount, purpose, } = donation.state;

      return <DonationCheckout amount={amount} selected={purpose} />;
    }}
  </Composer>
);

export default DonationCheckoutContainer;
