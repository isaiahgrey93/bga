import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { DonorStore } from 'stores';

import {
  Card,
  Icon,
  RadioGroup,
  RadioOption,
  SolidButton,
  Text,
  WrapperOffset,
} from 'components/common';

import {
  OffsetDismissButton,
  PaymentMethodLabelContainer,
  PaymentMethodLabel,
  PaymentModalActionDivider,
  PaymentModalActionTextContainer,
} from './styles';

const cardIconMap = {
  Visa: 'visa-badge',
  Mastercard: 'mastecard-badge',
  Discover: 'discover-badge',
};

class PaymentMethodSelection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      preferred: false,
    };
  }

  static getDerivedStateFromProps({ preferred, methods }, { selected }) {
    if (methods.length === 1) {
      return {
        selected: methods[0],
      };
    } else if (!selected && preferred) {
      return {
        selected: preferred,
      };
    }

    return {};
  }

  render() {
    const { selected } = this.state;
    const { close, methods } = this.props;

    return (
      <WrapperOffset
        component={
          <OffsetDismissButton
            name={'close-circle'}
            size={'xLarge'}
            color={'transparent'}
            iconProps={{ size: 'medium' }}
            onClick={close}
          />
        }
        wrapper={
          <Card>
            <RadioGroup>
              {methods.map(method => {
                const { id, number, type } = method;

                return (
                  <RadioOption
                    key={id}
                    value={id}
                    label={
                      <PaymentMethodLabelContainer>
                        <Icon size={'large'} name={cardIconMap[type]} />
                        <PaymentMethodLabel weight={'semiBold'}>
                          *{number.slice(number.length - 4)}
                        </PaymentMethodLabel>
                      </PaymentMethodLabelContainer>
                    }
                    selected={selected.id}
                  />
                );
              })}
            </RadioGroup>
            <PaymentModalActionDivider />
            <Link to={'/account/payment-methods/add'}>
              <SolidButton fluid color={'white'}>
                <PaymentModalActionTextContainer>
                  <Text weight={'semiBold'} color={'blue'}>
                    + Add new card
                  </Text>
                </PaymentModalActionTextContainer>
              </SolidButton>
            </Link>
          </Card>
        }
      />
    );
  }
}

PaymentMethodSelection.propTypes = {
  close: PropTypes.func.isRequired,
};

export default props => (
  <DonorStore.Wallet>
    {({ state: { list } }) => (
      <PaymentMethodSelection
        methods={list}
        preferred={list.find(opt => opt.preferred)}
        {...props}
      />
    )}
  </DonorStore.Wallet>
);
