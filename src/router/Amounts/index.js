import React, { Fragment } from 'react';

import { Donee } from 'stores';

import { HeaderImage, ProfileImage, Text } from 'components/common';

import {
  DoneeAmountLayoutContainer,
  DoneeInfoLayoutContainer,
  DoneeInfoContainer,
  DoneeInfoItem,
  DoneeLeftProfileImage,
  DoneeRightProfileImage,
} from './styles';

export default () => (
  <Donee.Profile fetch donee={'1071226100775949'}>
    {profile => {
      const { name, officer = {} } = profile;

      return (
        <Fragment>
          <HeaderImage source={`https://placeimg.com/1280/300/arch`} />
          <DoneeInfoLayoutContainer>
            <DoneeInfoContainer>
              <DoneeInfoItem>
                <Text>{name}</Text>
              </DoneeInfoItem>
              <DoneeInfoItem>
                <DoneeLeftProfileImage
                  source={`https://placehold.it/180/fff/fff&text=-`}
                />
                <DoneeRightProfileImage
                  source={`http://i.pravatar.cc/120?u=900`}
                />
                <Text weight={'semiBold'}>
                  {officer.title} {officer.name}
                </Text>
              </DoneeInfoItem>
            </DoneeInfoContainer>
          </DoneeInfoLayoutContainer>
          <DoneeAmountLayoutContainer>Testing</DoneeAmountLayoutContainer>
        </Fragment>
      );
    }}
  </Donee.Profile>
);
