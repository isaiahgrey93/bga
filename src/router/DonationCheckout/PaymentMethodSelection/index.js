import React from 'react';
import PropTypes from 'prop-types';

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

const methods = [
  {
    icon: 'visa-badge',
    label: '*5643',
    selected: '*5643',
  },
  {
    icon: 'mastercard-badge',
    label: '*8743',
  },
  {
    icon: 'discover-badge',
    label: '*4442',
  },
];

const PaymentMethodSelection = ({ close, }) => (
  <WrapperOffset
    component={
      <OffsetDismissButton
        name={'close'}
        size={'xLarge'}
        color={'transparent'}
        iconProps={{ size: 'medium', }}
        onClick={close}
      />
    }
    wrapper={
      <Card>
        <RadioGroup>
          {methods.map(({ label, icon, selected, }) => (
            <RadioOption
              key={label}
              label={
                <PaymentMethodLabelContainer>
                  <Icon size={'large'} name={icon} />
                  <PaymentMethodLabel>{label}</PaymentMethodLabel>
                </PaymentMethodLabelContainer>
              }
              selected={selected}
              value={label}
            />
          ))}
        </RadioGroup>
        <PaymentModalActionDivider />
        <SolidButton fluid color={'white'}>
          <PaymentModalActionTextContainer>
            <Text weight={'semiBold'} color={'blue'}>
              + Add new card
            </Text>
          </PaymentModalActionTextContainer>
        </SolidButton>
      </Card>
    }
  />
);

PaymentMethodSelection.propTypes = {
  close: PropTypes.func.isRequired,
};

export default PaymentMethodSelection;
