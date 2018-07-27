import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Composer from 'react-composer';

import { Donee, Donation } from 'stores';

import { AmountInput, HeaderImage, Text } from 'components/common';
import { DoneeImageWrapper } from 'components';

import {
  HeaderContainer,
  InfoLayoutContainer,
  InfoContainer,
  InfoItem,
  InfoOrganizationTitle,
  LeftProfileImage,
  RightProfileImage,
  AmountLayoutContainer,
  AmountContent,
  AmountsLabelContainer,
  AmountOptionContainer,
  AmountOptionButton,
  AmountOptions,
  CustomAmountButton,
  GivingExperienceInfo,
  GivingAppsLinks,
  GivingAppPlatformStoreImage,
} from './styles';

import { formatDecimal } from './utils';
import { appStoreUrl, googlePlayUrl } from './constants';

const headerURL =
  'https://jhmrad.com/wp-content/uploads/alvin-missionary-baptist-church-great-investment_2910388.jpg';
const avatarURL = 'http://i.pravatar.cc/100?img=17';

class DonationAmount extends Component {
  state = {
    custom: false,
    amount: undefined,
    initialized: false,
  };

  onToggleCustomAmount = () =>
    this.setState(() => ({ custom: true, amount: '' }));

  onAmountChange = amount => {
    this.setState(() => ({ amount, custom: false }), this.onSubmitAmount);
  };

  onCustomAmountChange = value => {
    this.setState(() => ({ amount: value }));
  };

  onSubmitAmount = () => {
    const { amount } = this.state;

    if (amount.length === 0) return;

    const value = formatDecimal(amount);

    this.props.onSetAmount(value);
  };

  render() {
    const { amount, custom } = this.state;

    const { profile } = this.props;
    const { name, officer = {}, images = {}, amounts = [] } = profile;

    return (
      <div>
        <HeaderContainer>
          <DoneeImageWrapper type={profile.type}>
            <HeaderImage source={headerURL} />
          </DoneeImageWrapper>
        </HeaderContainer>
        <InfoLayoutContainer>
          <InfoContainer>
            <InfoItem>
              <InfoOrganizationTitle>{name}</InfoOrganizationTitle>
            </InfoItem>
            <InfoItem>
              <LeftProfileImage source={images.logo} />
              <RightProfileImage source={avatarURL} />
              <Text size={'small'} weight={'semiBold'}>
                {officer.title} {officer.name}
              </Text>
            </InfoItem>
          </InfoContainer>
        </InfoLayoutContainer>
        <AmountLayoutContainer>
          <AmountContent>
            <AmountsLabelContainer>
              <Text weight={'semiBold'}>Choose Amount:</Text>
            </AmountsLabelContainer>
            <AmountOptions>
              {amounts.map(value => (
                <AmountOptionContainer key={value}>
                  <AmountOptionButton
                    active={!custom && amount === value}
                    onClick={() => this.onAmountChange(value)}
                  >
                    ${value}
                  </AmountOptionButton>
                </AmountOptionContainer>
              ))}
            </AmountOptions>
            {custom ? (
              <AmountInput
                autoFocus
                symbol={'$'}
                value={amount}
                placeholder={'Custom Amount'}
                onSubmit={this.onSubmitAmount}
                onChange={this.onCustomAmountChange}
              />
            ) : (
              <CustomAmountButton onClick={this.onToggleCustomAmount}>
                <Text weight={'semiBold'} color={'blue'}>
                  Custom Amount
                </Text>
              </CustomAmountButton>
            )}
          </AmountContent>
          <GivingExperienceInfo>
            <Text size={'small'}>
              For the most beautiful experience, get the Givelify mobile giving
              app.
            </Text>
            <GivingAppsLinks>
              <a target={'_blank'} href={appStoreUrl}>
                <GivingAppPlatformStoreImage
                  src={'/images/svg/app-store-badge.svg'}
                />
              </a>
              <a target={'_blank'} href={googlePlayUrl}>
                <GivingAppPlatformStoreImage
                  src={'/images/svg/google-play-badge.svg'}
                />
              </a>
            </GivingAppsLinks>
          </GivingExperienceInfo>
        </AmountLayoutContainer>
      </div>
    );
  }
}

DonationAmount.propTypes = {
  profile: PropTypes.object,
  onSetAmount: PropTypes.func.isRequired,
};

DonationAmount.defaultProps = {
  profile: undefined,
};

const DonationAmountContainer = ({ history }) => (
  <Composer
    components={[
      <Donation.New />,
      <Donee.Profile fetch donee={'1071226100775949'} />,
    ]}
  >
    {([donation, profile]) => {
      const onSetAmount = value => {
        if (profile.state.type === 'church') {
          history.push('/donation/envelope', { amount: value });
        } else {
          history.push('/donation/cause', { amount: value });
        }
      };

      return (
        <DonationAmount profile={profile.state} onSetAmount={onSetAmount} />
      );
    }}
  </Composer>
);

DonationAmountContainer.propTypes = {
  history: PropTypes.object,
};

DonationAmountContainer.defaultProps = {
  history: undefined,
};

export default DonationAmountContainer;
