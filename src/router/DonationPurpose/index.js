import React from 'react';
import PropTypes from 'prop-types';

import Composer from 'react-composer';

import { Donee, Donation, } from 'stores';

import { DoneeDetailHeader, } from 'components';
import { Divider, Tag, Text, } from 'components/common';

import {
  PurposeListContainer,
  PurposeListContent,
  PurposeSelectionContainer,
  PurposeSelectionSectionLabel,
  PurposeSelectionListContainer,
  PurposeSelectionListItem,
  PurposeSelectionListItemContent,
  PurposeSelectionListItemText,
} from './styles';

const DonationPurpose = ({ amount, purposes, }) => (
  <div>
    <DoneeDetailHeader />
    <PurposeListContainer>
      <PurposeListContent>
        <PurposeSelectionContainer
          left={<Text>Amount:</Text>}
          right={
            <Tag size={'medium'}>
              <Text color={'white'}>${amount}</Text>
            </Tag>
          }
        />
        <br />
        <br />
        <Divider />
        <br />
        <br />
        <PurposeSelectionSectionLabel>
          <Text weight={'bold'} size={'small'}>
            ADD A CONTRIBUTION TO:
          </Text>
        </PurposeSelectionSectionLabel>
        <br />
        <PurposeSelectionListContainer>
          {purposes.map(purpose => (
            <PurposeSelectionListItem key={purpose.name}>
              <PurposeSelectionListItemContent
                raised
                onClick={() => alert(purpose.name)}
              >
                <PurposeSelectionListItemText
                  left={<Text>{purpose.name}</Text>}
                  right={<Text value={'>'} />}
                />
              </PurposeSelectionListItemContent>
            </PurposeSelectionListItem>
          ))}
        </PurposeSelectionListContainer>
      </PurposeListContent>
    </PurposeListContainer>
  </div>
);

DonationPurpose.propTypes = {
  amount: PropTypes.string,
  purposes: PropTypes.arrayOf(PropTypes.object),
};

DonationPurpose.defaultProps = {
  amount: undefined,
  purposes: [],
};

const DonationPurposeContainer = () => (
  <Composer
    components={[
      <Donation.New />,
      <Donee.Offerings fetch donee={'1071226100775949'} />,
    ]}
  >
    {([donation, offerings, ]) => (
      <DonationPurpose
        amount={donation.state.amount}
        purposes={offerings.state.list}
      />
    )}
  </Composer>
);

export default DonationPurposeContainer;
