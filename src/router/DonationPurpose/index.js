import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Composer from 'react-composer';

import { DoneeStore, DonationStore } from 'stores';
import { DoneeApiProvider } from 'providers';

import { DoneeDetailHeader } from 'components';
import { Divider, Icon, Tag, Text } from 'components/common';

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

const DonationPurpose = ({ amount, purposes, selected, onSetPurpose }) => (
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
        {selected.map(purpose => (
          <Fragment key={purpose.id}>
            <PurposeSelectionListItem>
              <PurposeSelectionListItemContent
                raised
                onClick={() => onSetPurpose(purpose)}
              >
                <PurposeSelectionListItemText
                  left={
                    <div>
                      <PurposeSelectedTextContainer>
                        <Text size={'large'}>${purpose.amount}</Text>
                      </PurposeSelectedTextContainer>
                      <PurposeSelectedTextContainer>
                        <Text value={purpose.name} />
                      </PurposeSelectedTextContainer>
                    </div>
                  }
                  right={<Icon size={'small'} name={'check-active'} />}
                />
              </PurposeSelectionListItemContent>
            </PurposeSelectionListItem>
          </Fragment>
        ))}
        {selected.length > 0 && (
          <Fragment>
            <br />
            <Divider />
            <br />
            <br />
          </Fragment>
        )}

        <PurposeSelectionListContainer>
          {purposes
            .sort((a, b) => a.priority - b.priority)
            .filter(p => !selected.find(s => s.id === p.id))
            .map(purpose => (
              <PurposeSelectionListItem key={purpose.id}>
                <PurposeSelectionListItemContent
                  raised
                  onClick={() => onSetPurpose(purpose)}
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
  selected: PropTypes.array,
  purposes: PropTypes.arrayOf(PropTypes.object),
  onSetPurpose: PropTypes.func.isRequired,
};

DonationPurpose.defaultProps = {
  amount: undefined,
  selected: undefined,
  purposes: [],
};

const DonationPurposeContainer = ({ history, location }) => {
  const { amount } = location.state;

  if (history.action === 'POP' || !amount) {
    history.replace('/donation/amount', {});

    return null;
  }

  return (
    <Composer components={[<DonationStore.New />, <DoneeStore.Offerings />]}>
      {([donation, offerings]) => (
        <DoneeApiProvider.FetchOfferings
          fetch
          donee={'1071226100775949'}
          onComplete={offerings.store.setOfferings}
        >
          {({ error, loading }) => {
            const { list = [] } = offerings.state;
            const { purposes: _purposes = {} } = donation.state;

            const purposes = Object.values(_purposes);

            const onSetPurpose = purpose => {
              donation.store.setPurpose(purpose, amount, () => {
                history.replace('/donation/checkout', {});
              });
            };

            return (
              <DonationPurpose
                amount={amount}
                purposes={list}
                selected={purposes}
                onSetPurpose={onSetPurpose}
              />
            );
          }}
        </DoneeApiProvider.FetchOfferings>
      )}
    </Composer>
  );
};

DonationPurposeContainer.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default DonationPurposeContainer;
