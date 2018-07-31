import React from 'react';

import {
  Card,
  Icon,
  Modal,
  Text,
  TextInput,
  SolidButton,
  OutlineButton,
  WrapperOffset,
} from 'components/common';

import {
  LoginContainer,
  HeaderContainer,
  CenterContainer,
  FooterContainer,
  FacebookButtonContent,
} from './styles';

const AuthLanding = () => (
  <LoginContainer>
    <HeaderContainer>
      <img alt={'Givelify Logo'} src={'/images/svg/givelify-logo.svg'} />
    </HeaderContainer>
    <CenterContainer>
      <div style={{ width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ padding: 20 }}>
            <Text color={'white'} weight={'semiBold'}>
              SIGN IN
            </Text>
          </div>
          <div style={{ padding: 20 }}>
            <Text color={'white'} weight={'semiBold'} style={{ opacity: 0.5 }}>
              CREATE ACCOUNT
            </Text>
          </div>
        </div>
        <WrapperOffset
          wrapper={
            <Card
              raised
              style={{ width: '100%', paddingBottom: 24, borderRadius: 20 }}
            >
              <center>
                <div style={{ padding: '6px' }}>
                  <Text>Personal Giving</Text>
                </div>
              </center>
              <div style={{ padding: '12px 9px' }}>
                <TextInput
                  icon={'mail'}
                  iconActive={'mail-active'}
                  placeholder={'Email'}
                  type={'email'}
                />
              </div>
              <div style={{ padding: '12px 9px' }}>
                <TextInput
                  icon={'lock'}
                  iconActive={'lock-active'}
                  placeholder={'Password'}
                  type={'password'}
                />
              </div>
              <br />
            </Card>
          }
          component={
            <div
              style={{
                width: '100%',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <SolidButton
                fluid
                size="large"
                raised="high"
                value="Sign in"
                color="secondary"
                style={{ width: '80%', margin: '0 auto' }}
              />
            </div>
          }
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 12,
          }}
        >
          <Text size={'small'} color={'blue'}>
            Forgot your password?
          </Text>
        </div>
      </div>
    </CenterContainer>
    <FooterContainer>
      <center>
        <Text size={'xSmall'}>Need a free personal giving account?</Text>
        <br />
        <Text size={'small'} color={'blue'}>
          Sign up now!
        </Text>
      </center>
    </FooterContainer>
  </LoginContainer>
);

export default AuthLanding;
