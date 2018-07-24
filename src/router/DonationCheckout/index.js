import React, { Fragment, } from 'react';
import PropTypes from 'prop-types';

import Composer from 'react-composer';

import { Donation, Donee, } from 'stores';
import { DoneeDetailHeader, } from 'components';
import { Divider, Icon, IconButton, Row, Text, } from 'components/common';

import {
  CheckoutContainer,
  CheckoutTotalContainer,
  CheckoutLineItem,
  CheckoutLineItemAmountContainer,
  CheckoutActionsContainer,
  CheckoutActionButton,
  CheckoutPaymentContainer,
} from './styles';

const DonationCheckout = ({ amount, selected, }) => (
  <div>
    <DoneeDetailHeader />
    <CheckoutContainer>
      <div>
        <CheckoutTotalContainer>
          <Text weight={'bold'} size={'large'}>
            TOTAL: ${amount}
          </Text>
        </CheckoutTotalContainer>
      </div>
      <div>
        {[selected, ].sort((a, b) => b.priority - a.priority).map(purpose => (
          <Fragment>
            <CheckoutLineItem>
              <Row
                left={<Text color={'grey1'}>{purpose && purpose.name}</Text>}
                right={
                  <Row
                    left={
                      <CheckoutLineItemAmountContainer>
                        <Text color={'grey1'}>${amount}</Text>
                      </CheckoutLineItemAmountContainer>
                    }
                    right={
                      <IconButton
                        name={'edit'}
                        size={'xSmall'}
                        color={'transparent'}
                      />
                    }
                  />
                }
              />
            </CheckoutLineItem>
            <Divider />
          </Fragment>
        ))}
      </div>
      <CheckoutActionsContainer>
        <CheckoutActionButton>
          <Icon name={'add'} size={'small'} />
          <div style={{ height: 8, }} />
          <Text color={'grey2'} size={'small'}>
            Add donation
          </Text>
        </CheckoutActionButton>
        <CheckoutActionButton>
          <Icon name={'memo'} size={'small'} />
          <div style={{ height: 8, }} />
          <Text color={'grey2'} size={'small'}>
            Add memo
          </Text>
        </CheckoutActionButton>
        <CheckoutActionButton>
          <Icon name={'recurring'} size={'small'} />
          <div style={{ height: 8, }} />
          <Text color={'grey2'} size={'small'}>
            Make recurring
          </Text>
        </CheckoutActionButton>
      </CheckoutActionsContainer>
      <CheckoutPaymentContainer>
        <div>Text</div>
        <div>Text</div>
      </CheckoutPaymentContainer>
    </CheckoutContainer>
  </div>
);

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
