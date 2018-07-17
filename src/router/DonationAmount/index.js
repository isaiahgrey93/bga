import React, { Component, Fragment, } from 'react';
import PropTypes from 'prop-types';
import Composer from 'react-composer';

import { Donee, Donation, } from 'stores';

import { AmountInput, HeaderImage, Text, } from 'components/common';

import {
  HeaderContainer,
  InfoLayoutContainer,
  InfoContainer,
  InfoItem,
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

import { formatDecimal, } from './utils';
import { appStoreUrl, googlePlayUrl, } from './constants';

const headerURL =
  'https://jhmrad.com/wp-content/uploads/alvin-missionary-baptist-church-great-investment_2910388.jpg';
const avatarURL = 'https://placehold.it/1200/fafafa/fafafa&text=-';

class DonationAmount extends Component {
  state = {
    custom: false,
    amount: undefined,
    initialized: false,
  };

  static getDerivedStateFromProps(props, state) {
    const { initialized, } = state;
    const { amount, profile, } = props;
    const { amounts, } = profile;

    if (amount && !initialized) {
      const value =
        amount
          .split(',')
          .join('')
          .split('.')[0] || '';

      const custom = amounts.indexOf(value) === -1;

      return {
        custom,
        initialized: true,
        amount: custom ? amount : value,
      };
    }

    return {};
  }

  onToggleCustomAmount = () =>
    this.setState(() => ({ custom: true, amount: '', }));

  onAmountChange = (amount) => {
    this.setState(() => ({ amount, custom: false, }), this.onSubmitAmount);
  };

  onCustomAmountChange = (value) => {
    this.setState(() => ({ amount: value, }));
  };

  onSubmitAmount = () => {
    const { amount, } = this.state;

    if (amount.length === 0) return;

    const value = formatDecimal(amount);

    this.props.onSetAmount(value);
  };

  render() {
    const { amount, custom, } = this.state;

    const { profile, } = this.props;
    const { name, officer = {}, amounts = [], } = profile;

    return (
      <Fragment>
        <HeaderContainer>
          <HeaderImage source={headerURL} />
        </HeaderContainer>
        <InfoLayoutContainer>
          <InfoContainer>
            <InfoItem>
              <Text>{name}</Text>
            </InfoItem>
            <InfoItem>
              <LeftProfileImage source={avatarURL} />
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
                <GivingAppPlatformStoreImage src={'/app-store-badge.svg'} />
              </a>
              <a target={'_blank'} href={googlePlayUrl}>
                <GivingAppPlatformStoreImage src={'/google-play-badge.svg'} />
              </a>
            </GivingAppsLinks>
          </GivingExperienceInfo>
        </AmountLayoutContainer>
      </Fragment>
    );
  }
}

DonationAmount.propTypes = {
  amount: PropTypes.string,
  profile: PropTypes.object,
  onSetAmount: PropTypes.func.isRequired,
};

DonationAmount.defaultProps = {
  amount: undefined,
  profile: undefined,
};

const DonationAmountContainer = ({ history, }) => (
  <Composer
    components={[
      <Donation.New />,
      <Donee.Profile fetch donee={'1071226100775949'} />,
    ]}
  >
    {([donation, profile, ]) => {
      const onSetAmount = (value) => {
        donation.store.setAmount(value);

        if (profile.state.type === 'church') {
          history.push('/donation/envelope');
        } else {
          history.push('/donation/cause');
        }
      };
      return (
        <DonationAmount
          profile={profile.state}
          amount={donation.state.amount}
          onSetAmount={onSetAmount}
        />
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