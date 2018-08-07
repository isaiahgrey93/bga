import React from 'react';
import PropTypes from 'prop-types';

import { DonationStore } from 'stores';

import { withRouter } from 'react-router-dom';

import { Icon, Text } from 'components/common';

import {
  CheckoutActionsContainer,
  CheckoutActionButtonContainer,
  CheckoutActionButton,
  CheckoutActionSpacer,
} from './styles';

import { frequencyMap } from './../DonationFrequencySelection/constants';

const CheckoutActions = ({
  history,
  open,
  hasMemo,
  isRecurring,
  frequency,
}) => (
  <CheckoutActionsContainer>
    <CheckoutActionButtonContainer>
      <CheckoutActionButton
        onClick={() => {
          history.push('/donation/amount');
        }}
      >
        <Icon name={'add'} size={'small'} />
        <CheckoutActionSpacer />
        <Text color={'grey2'} size={'small'}>
          Add donation
        </Text>
      </CheckoutActionButton>
    </CheckoutActionButtonContainer>
    <CheckoutActionButtonContainer>
      <CheckoutActionButton
        onClick={() => {
          history.push('/donation/memo');
        }}
      >
        <Icon name={hasMemo ? 'memo-active' : 'memo'} size={'small'} />
        <CheckoutActionSpacer />
        <Text color={hasMemo ? 'blue' : 'grey2'} size={'small'}>
          {hasMemo ? 'Edit Memo' : 'Add memo'}
        </Text>
      </CheckoutActionButton>
    </CheckoutActionButtonContainer>
    <CheckoutActionButtonContainer>
      <CheckoutActionButton onClick={open}>
        <Icon
          size={'small'}
          name={isRecurring ? 'recurring-active' : 'recurring'}
        />
        <CheckoutActionSpacer />
        <Text color={isRecurring ? 'blue' : 'grey2'} size={'small'}>
          {isRecurring ? frequencyMap[frequency].label : 'Make recurring'}
        </Text>
      </CheckoutActionButton>
    </CheckoutActionButtonContainer>
  </CheckoutActionsContainer>
);

CheckoutActions.propTypes = {
  open: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  hasMemo: PropTypes.bool.isRequired,
  isRecurring: PropTypes.bool.isRequired,
  frequency: PropTypes.string.isRequired,
};

export default withRouter(props => (
  <DonationStore.New>
    {({ state }) => {
      const { memo, frequency } = state.value;

      const hasMemo = !!memo;
      const isRecurring = frequency !== 'none';

      return (
        <CheckoutActions
          {...props}
          hasMemo={hasMemo}
          isRecurring={isRecurring}
          frequency={frequency}
        />
      );
    }}
  </DonationStore.New>
));
