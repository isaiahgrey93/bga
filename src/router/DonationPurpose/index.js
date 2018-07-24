import React, { Fragment, } from 'react';
import PropTypes from 'prop-types';

import Composer from 'react-composer';

import { Donee, Donation, } from 'stores';

import { DoneeDetailHeader, } from 'components';
import { Divider, Icon, Tag, Text, } from 'components/common';

import {
  PurposeListContainer,
  PurposeListContent,
  PurposeSelectionContainer,
  PurposeSelectionSectionLabel,
  PurposeSelectedTextContainer,
  PurposeSelectionListContainer,
  PurposeSelectionListItem,
  PurposeSelectionListItemContent,
  PurposeSelectionListItemText,
} from './styles';

const DonationPurpose = ({
  amount, purposes, selected, onSetPurpose,
}) => (
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
        {selected && (
          <Fragment>
            <PurposeSelectionListItem key={selected.name}>
              <PurposeSelectionListItemContent
                raised
                onClick={() => onSetPurpose(selected.id)}
              >
                <PurposeSelectionListItemText
                  left={
                    <div>
                      <PurposeSelectedTextContainer>
                        <Text size={'large'}>${amount}</Text>
                      </PurposeSelectedTextContainer>
                      <PurposeSelectedTextContainer>
                        <Text value={selected.name} />
                      </PurposeSelectedTextContainer>
                    </div>
                  }
                  right={<Icon size={'small'} name={'check-active'} />}
                />
              </PurposeSelectionListItemContent>
            </PurposeSelectionListItem>
            <br />
            <Divider />
            <br />
            <br />
          </Fragment>
        )}

        <PurposeSelectionListContainer>
          {purposes
            .filter(p => (selected ? p.id !== selected.id : true))
            .map(purpose => (
              <PurposeSelectionListItem key={purpose.name}>
                <PurposeSelectionListItemContent
                  raised
                  onClick={() => onSetPurpose(purpose.id)}
                >
                  <PurposeSelectionListItemText
                    left={<Text value={purpose.name} />}
                    right={<Icon size={'small'} name={'arrow'} />}
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
  selected: PropTypes.object,
  purposes: PropTypes.arrayOf(PropTypes.object),
  onSetPurpose: PropTypes.func.isRequired,
};

DonationPurpose.defaultProps = {
  amount: undefined,
  selected: undefined,
  purposes: [],
};

const DonationPurposeContainer = ({ history, }) => (
  <Composer
    components={[
      <Donation.New />,
      <Donee.Offerings fetch donee={'1071226100775949'} />,
    ]}
  >
    {([donation, offerings, ]) => {
      const onSetPurpose = (value) => {
        history.push('/donation/checkout');

        setTimeout(() => donation.store.setPurpose(value), 300);
      };

      return (
        <DonationPurpose
          amount={donation.state.amount}
          purposes={offerings.state.list}
          onSetPurpose={onSetPurpose}
          selected={offerings.state.list.find(o => o.id === donation.state.purpose)}
        />
      );
    }}
  </Composer>
);

DonationPurposeContainer.propTypes = {
  history: PropTypes.object.isRequired,
};

export default DonationPurposeContainer;
