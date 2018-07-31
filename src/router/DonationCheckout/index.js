import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Composer from 'react-composer';

import { Donation, Donee } from 'stores';
import { DoneeDetailHeader } from 'components';
import { Modal, SolidButton, Text } from 'components/common';

import {
  CheckoutContainer,
  CheckoutContent,
  CheckoutConfirmationContainer,
  DonationMemoPreview,
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
    const { modals } = this.state;
    const {
      submit,
      memo,
      hasMemo,
      total,
      purposes,
      removePurpose,
    } = this.props;

    return (
      <div>
        <DoneeDetailHeader />
        <CheckoutContainer>
          <CheckoutContent>
            <DonationList
              total={total}
              purposes={purposes}
              removePurpose={removePurpose}
            />
            <CheckoutActions open={this.modal('frequency', true)} />
            <PaymentInfo open={this.modal('payment', true)} />
            {hasMemo && (
              <DonationMemoPreview>
                <Text>{memo}</Text>
              </DonationMemoPreview>
            )}
            <CheckoutConfirmationContainer>
              <SolidButton
                fluid
                size={'large'}
                raised={'high'}
                color={'secondary'}
                value={`Give ${total ? `$${total}` : ''}`}
                onClick={submit}
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
  memo: PropTypes.string,
  hasMemo: PropTypes.bool,
  purposes: PropTypes.array,
  removePurpose: PropTypes.func,
};

DonationCheckout.defaultProps = {
  total: undefined,
  memo: undefined,
  hasMemo: undefined,
  purposes: undefined,
  removePurpose: undefined,
};

const DonationCheckoutContainer = ({ history }) => (
  <Composer
    components={[
      <Donation.New />,
      <Donee.Offerings fetch donee={'1071226100775949'} />,
    ]}
  >
    {([donation]) => {
      const { purposes: _purposes = [], memo } = donation.state;

      const hasMemo = !!memo;
      const purposes = Object.values(_purposes);
      const total = purposes
        .reduce(
          (acc, { amount = '0' }) => amount.split(',').join('') * 1 + acc,
          0
        )
        .toFixed(2);

      const onSubmit = () => {
        history.push('/account');
      };

      return (
        <DonationCheckout
          memo={memo}
          hasMemo={hasMemo}
          total={total}
          purposes={purposes}
          removePurpose={donation.store.removePurpose}
          submit={onSubmit}
        />
      );
    }}
  </Composer>
);

export default DonationCheckoutContainer;
