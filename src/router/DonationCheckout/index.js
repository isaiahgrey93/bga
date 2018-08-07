import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Composer from 'react-composer';

import { DonationStore } from 'stores';
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
            {hasMemo && (
              <DonationMemoPreview>
                <Text>{memo}</Text>
              </DonationMemoPreview>
            )}
            <PaymentInfo open={this.modal('payment', true)} />

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
  submit: PropTypes.func,
  removePurpose: PropTypes.func,
};

DonationCheckout.defaultProps = {
  total: undefined,
  memo: undefined,
  hasMemo: undefined,
  purposes: undefined,
  submit: undefined,
  removePurpose: undefined,
};

const DonationCheckoutContainer = ({ history }) => (
  <Composer components={[<DonationStore.New />]}>
    {([donation]) => {
      const { purposes: _purposes = [], memo } = donation.state;

      if (Object.keys(_purposes).length <= 0) {
        history.replace('/donation/amount');
        return null;
      }

      const hasMemo = !!memo;
      const purposes = Object.values(_purposes);
      const total = purposes
        .reduce(
          (acc, { amount = '0' }) => amount.split(',').join('') * 1 + acc,
          0
        )
        .toFixed(2);

      const onSubmit = () => {
        history.push('/account/auth', { referrer: '/donation/checkout' });
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

DonationCheckoutContainer.propTypes = {
  history: PropTypes.object.isRequired,
};

export default DonationCheckoutContainer;
