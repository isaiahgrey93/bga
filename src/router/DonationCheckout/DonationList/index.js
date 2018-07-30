import React, { Fragment, } from 'react';
import PropTypes from 'prop-types';

import { Divider, IconButton, Row, Text, } from 'components/common';

import {
  DonationTotalContainer,
  DonationListItem,
  DonationListItemAmountContainer,
} from './styles';

const DonationList = ({ total, purposes, }) => (
  <Fragment>
    <div>
      <DonationTotalContainer>
        <Text weight={'bold'} size={'large'}>
          TOTAL: ${total}
        </Text>
      </DonationTotalContainer>
    </div>
    <div>
      {purposes.sort((a, b) => b.priority - a.priority).map(purpose => (
        <Fragment>
          <DonationListItem>
            <Row
              left={<Text color={'grey1'} value={purpose && purpose.name} />}
              right={
                <Row
                  left={
                    <DonationListItemAmountContainer>
                      <Text color={'grey1'}>${purpose.amount}</Text>
                    </DonationListItemAmountContainer>
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
          </DonationListItem>
          <Divider />
        </Fragment>
      ))}
    </div>
  </Fragment>
);

DonationList.propTypes = {
  total: PropTypes.string,
  purposes: PropTypes.array,
};

DonationList.defaultProps = {
  total: undefined,
  purposes: undefined,
};

export default DonationList;
