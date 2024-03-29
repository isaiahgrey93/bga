import React from 'react';
import PropTypes from 'prop-types';

import { DonationStore } from 'stores';

import {
  Card,
  RadioGroup,
  RadioOption,
  WrapperOffset,
} from 'components/common';

import {
  OffsetDismissButton,
  DonationFrequencyLabelContainer,
  DonationFrequencyLabel,
} from './styles';

import { frequencies } from './constants';

const DonationFrequencySelection = ({ close, selected, onSelect }) => (
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
          {frequencies.map(({ value, label }) => (
            <RadioOption
              key={label}
              label={
                <DonationFrequencyLabelContainer>
                  <DonationFrequencyLabel>{label}</DonationFrequencyLabel>
                </DonationFrequencyLabelContainer>
              }
              value={value}
              selected={selected}
              onSelect={onSelect}
            />
          ))}
        </RadioGroup>
      </Card>
    }
  />
);

DonationFrequencySelection.propTypes = {
  selected: PropTypes.string,
  close: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

DonationFrequencySelection.defaultProps = {
  selected: undefined,
};

export default props => (
  <DonationStore.New>
    {({ state, store }) => {
      const { frequency } = state.value;

      return (
        <DonationFrequencySelection
          {...props}
          selected={frequency}
          onSelect={store.setFrequency}
        />
      );
    }}
  </DonationStore.New>
);
