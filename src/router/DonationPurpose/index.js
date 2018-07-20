import React from 'react';

import { Donee, Donation } from 'stores';

import { DoneeDetailHeader } from 'components';
import { Card, Divider, Row, Tag, Text } from 'components/common';

import {
  PurposeListContainer,
  PurposeListContent,
  PurposeSelectionContainer,
  PurposeSelectionSectionLabel,
} from './styles';

export default () => (
  <div>
    <DoneeDetailHeader />
    <PurposeListContainer>
      <PurposeListContent>
        <PurposeSelectionContainer
          left={<Text>Amount:</Text>}
          right={
            <Donation.New>
              {({ state: { amount } }) => (
                <Tag size={'medium'}>
                  <Text color={'white'}>${amount}</Text>
                </Tag>
              )}
            </Donation.New>
          }
        />
        <Divider />
        <br />
        <br />
        <br />
        <PurposeSelectionSectionLabel>
          <Text weight={'bold'} size={'small'}>
            ADD A CONTRIBUTION TO:
          </Text>
        </PurposeSelectionSectionLabel>
        <br />
        <Donee.Offerings fetch donee={'1071226100775949'}>
          {({ state: { list: offerings = [] } }) => (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}
            >
              {offerings.map(offering => (
                <div style={{ width: '47%', margin: '0px 0px 12px' }}>
                  <Card raised onClick={() => null}>
                    <Row left={offering.name} right={'>'} />
                  </Card>
                </div>
              ))}
            </div>
          )}
        </Donee.Offerings>
      </PurposeListContent>
    </PurposeListContainer>
  </div>
);
