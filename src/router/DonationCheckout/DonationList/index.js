import React, { Fragment, } from 'react';
import PropTypes from 'prop-types';

import { Divider, IconButton, Row, Text, } from 'components/common';

import {
  DonationTotalContainer,
  DonationListItem,
  DonationListItemAmountContainer,
} from './styles';

const DonationList = ({ amount, selected, }) => (
  <Fragment>
    <div>
      <DonationTotalContainer>
        <Text weight={'bold'} size={'large'}>
          TOTAL: ${amount}
        </Text>
      </DonationTotalContainer>
    </div>
    <div>
      {[]
        .concat(selected || [])
        .sort((a, b) => b.priority - a.priority)
        .map(purpose => (
          <Fragment>
            <DonationListItem>
              <Row
                left={<Text color={'grey1'} value={purpose && purpose.name} />}
                right={
                  <Row
                    left={
                      <DonationListItemAmountContainer>
                        <Text color={'grey1'}>${amount}</Text>
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
  amount: PropTypes.string,
  selected: PropTypes.object,
};

DonationList.defaultProps = {
  amount: undefined,
  selected: undefined,
};

export default DonationList;
