import React from 'react';
import PropTypes from 'prop-types';

import { Donee, } from 'stores';

import { ProfileImage, Text, } from 'components/common';

import {
  DetailHeaderContainer,
  DetailHeaderContent,
  DetailHeaderImageContainer,
} from './styles';

const DoneeDetailHeader = ({ name, images = [], }) => (
  <DetailHeaderContainer>
    <DetailHeaderContent>
      <DetailHeaderImageContainer>
        <ProfileImage bordered shape={'rounded'} source={images.logo} />
      </DetailHeaderImageContainer>
      <Text weight={'semiBold'} size={'small'}>
        {name}
      </Text>
    </DetailHeaderContent>
  </DetailHeaderContainer>
);

DoneeDetailHeader.propTypes = {
  name: PropTypes.string,
  images: PropTypes.object,
};

DoneeDetailHeader.defaultProps = {
  name: undefined,
  images: undefined,
};

const DoneeDetailHeaderContainer = () => (
  <Donee.Profile fetch donee={'1071226100775949'}>
    {profile => (
      <DoneeDetailHeader
        name={profile.state.name}
        images={profile.state.images}
      />
    )}
  </Donee.Profile>
);

export default DoneeDetailHeaderContainer;
