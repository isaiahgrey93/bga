import React from 'react';

import PropTypes from 'prop-types';

import { Icon, Row, Text, } from 'components/common';
import {
  PaymentInfoContainer,
  PaymentInfoPreview,
  PaymentInfoCardPreview,
  PaymentLink,
} from './styles';

const PaymentInfo = ({ open, }) => (
  <PaymentInfoContainer>
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
        <PaymentLink onClick={open}>
          <Text color={'blue'} size={'small'}>
            Different payment
          </Text>
        </PaymentLink>
      }
    />
  </PaymentInfoContainer>
);

PaymentInfo.propTypes = {
  open: PropTypes.func.isRequired,
};

export default PaymentInfo;
