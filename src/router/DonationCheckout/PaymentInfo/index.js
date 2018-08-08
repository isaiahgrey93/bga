import React from 'react';
import Composer from 'react-composer';

import PropTypes from 'prop-types';

import { DonorApiProvider } from 'providers';
import { DonorStore } from 'stores';

import { Icon, Row, Text } from 'components/common';
import {
  PaymentInfoContainer,
  PaymentInfoPreview,
  PaymentInfoCardPreview,
  PaymentButtonLink,
  PaymentLink,
} from './styles';

const PaymentInfo = ({ open, loading, noPaymentMethod }) => (
  <PaymentInfoContainer hidden={loading}>
    {noPaymentMethod ? (
      <PaymentLink to={'/account/payment-methods/add'}>
        <Text color={'blue'} size={'small'}>
          Add Payment Method
        </Text>
      </PaymentLink>
    ) : (
      <Row
        left={
          <PaymentInfoPreview>
            <Icon size={'large'} name={'visa-badge'} />
            <PaymentInfoCardPreview>
              <Text weight={'semiBold'}>*5643</Text>
            </PaymentInfoCardPreview>
          </PaymentInfoPreview>
        }
        right={
          <PaymentButtonLink onClick={open}>
            <Text color={'blue'} size={'small'}>
              Different payment
            </Text>
          </PaymentButtonLink>
        }
      />
    )}
  </PaymentInfoContainer>
);

PaymentInfo.propTypes = {
  open: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  noPaymentMethod: PropTypes.bool.isRequired,
};

export default props => (
  <Composer components={[<DonorStore.Profile />, <DonorStore.Wallet />]}>
    {([
      {
        state: { value: profile },
      },
      { store: walletStore, state: wallet },
    ]) => {
      return (
        console.log({ profile, wallet }) || (
          <DonorApiProvider.FetchWallet
            fetch
            donor={profile.id}
            onComplete={walletStore.setWallet}
          >
            {({ loading }) => (
              <PaymentInfo
                {...props}
                loading={loading}
                noPaymentMethod={wallet.list.length === 0}
              />
            )}
          </DonorApiProvider.FetchWallet>
        )
      );
    }}
  </Composer>
);
