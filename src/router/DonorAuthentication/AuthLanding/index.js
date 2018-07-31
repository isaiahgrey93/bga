import React from 'react';

import {
  Icon,
  Modal,
  Text,
  SolidButton,
  OutlineButton,
} from 'components/common';

import {
  LandingContainer,
  HeaderContainer,
  CenterContainer,
  FooterContainer,
  FacebookButtonContent,
} from './styles';

const AuthLanding = props => (
  <LandingContainer>
    <HeaderContainer>
      <img alt={'Givelify Logo'} src={'/images/svg/givelify-logo.svg'} />
    </HeaderContainer>
    <CenterContainer>
      <center>
        <Text
          color={'white'}
          size={'small'}
          value={'PERSONAL GIVING ACCOUNT'}
        />
      </center>
      <br />
      <OutlineButton
        fluid
        raised={'high'}
        size={'large'}
        color={'white'}
        onClick={() => {
          props.history.push('/account/login');
        }}
      >
        <Text size={'small'} color={'white'}>
          Continue with email
        </Text>
      </OutlineButton>
      <br />
      <br />
      <SolidButton fluid raised={'high'} size={'large'} color={'white'}>
        <FacebookButtonContent>
          <Icon size={'small'} name={'facebook-square'} />
          &nbsp; &nbsp;
          <Text
            size={'small'}
            weight={'semiBold'}
            style={{ color: '#3B5998' }}
            value={'Continue with Facebook'}
          />
        </FacebookButtonContent>
      </SolidButton>
      <br />
      <br />
      <center>
        <Text
          size={'xSmall'}
          color={'white'}
          value={
            "We won't share your contribution data with Facebook or post without your consent."
          }
        />
      </center>
    </CenterContainer>
    <FooterContainer>
      <center>
        <Text size={'xSmall'} color={'white'}>
          Organization official? <u>Create an account</u> and increase
          contributions with Givelify.
        </Text>
      </center>
    </FooterContainer>
  </LandingContainer>
);

export default AuthLanding;
