import React from 'react';

import { Icon, Text, } from 'components/common';

import {
  CheckoutActionsContainer,
  CheckoutActionButton,
  CheckoutActionSpacer,
} from './styles';

const CheckoutActions = () => (
  <CheckoutActionsContainer>
    <CheckoutActionButton>
      <Icon name={'add'} size={'small'} />
      <CheckoutActionSpacer />
      <Text color={'grey2'} size={'small'}>
        Add donation
      </Text>
    </CheckoutActionButton>
    <CheckoutActionButton>
      <Icon name={'memo'} size={'small'} />
      <CheckoutActionSpacer />
      <Text color={'grey2'} size={'small'}>
        Add memo
      </Text>
    </CheckoutActionButton>
    <CheckoutActionButton>
      <Icon name={'recurring'} size={'small'} />
      <CheckoutActionSpacer />
      <Text color={'grey2'} size={'small'}>
        Make recurring
      </Text>
    </CheckoutActionButton>
  </CheckoutActionsContainer>
);

export default CheckoutActions;
