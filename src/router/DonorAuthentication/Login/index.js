import React, { Component } from 'react';

import { Icon, Text, TextInput, WrapperOffset } from 'components/common';

import { DonorApiProvider } from 'providers';
import { DonorStore } from 'stores';

import {
  LoginContainer,
  CenterContainer,
  FooterContainer,
  FormContainer,
  FormHeaderContainer,
  FormHeaderItem,
  FormHeaderItemText,
  FormCard,
  FormCardHeaderContainer,
  FormItem,
  StyledLink,
  FormSubmit,
  FormSubmitContainer,
  FormAlternateActionContainer,
} from './styles';

import AuthReferrer from '../AuthReferrer';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  onFieldChange = key => e => {
    e.persist();

    this.setState(() => ({ [key]: e.target.value }));
  };

  onSubmit = () => {
    const { login } = this.props;
    const { email, password } = this.state;

    login({ email, password });
  };

  render() {
    const { loading } = this.props;
    const { email, password } = this.state;

    const disabled = !email || !password;

    return (
      <LoginContainer>
        <CenterContainer>
          <FormContainer>
            <FormHeaderContainer>
              <FormHeaderItem>
                <StyledLink replace to={'/account/login'}>
                  <FormHeaderItemText size={'small'} color={'white'} active>
                    SIGN IN
                  </FormHeaderItemText>
                </StyledLink>
              </FormHeaderItem>
              <FormHeaderItem>
                <StyledLink replace to={'/account/signup'}>
                  <FormHeaderItemText size={'small'} color={'white'}>
                    CREATE ACCOUNT
                  </FormHeaderItemText>
                </StyledLink>
              </FormHeaderItem>
            </FormHeaderContainer>
            <WrapperOffset
              wrapper={
                <FormCard raised>
                  <center>
                    <FormCardHeaderContainer>
                      <Text>Personal Giving</Text>
                    </FormCardHeaderContainer>
                  </center>
                  <FormItem>
                    <TextInput
                      icon={'mail'}
                      iconActive={'mail-active'}
                      placeholder={'Email'}
                      type={'email'}
                      value={email}
                      onChange={this.onFieldChange('email')}
                    />
                  </FormItem>
                  <FormItem>
                    <TextInput
                      icon={'lock'}
                      iconActive={'lock-active'}
                      placeholder={'Password'}
                      type={'password'}
                      value={password}
                      onChange={this.onFieldChange('password')}
                    />
                  </FormItem>
                  <br />
                </FormCard>
              }
              component={
                <FormSubmitContainer>
                  <FormSubmit
                    fluid
                    size={'large'}
                    raised={'high'}
                    value={loading ? 'Authenticating..' : 'Sign In'}
                    color={'secondary'}
                    onClick={this.onSubmit}
                    disabled={disabled || loading}
                  />
                </FormSubmitContainer>
              }
            />
            <FormAlternateActionContainer>
              <StyledLink replace to={'/account/forgot-password'}>
                <Text size={'xSmall'} color={'blue'}>
                  Forgot your password?
                </Text>
              </StyledLink>
            </FormAlternateActionContainer>
          </FormContainer>
        </CenterContainer>
        <FooterContainer>
          <center>
            <Text size={'xSmall'}>Need a free personal giving account?</Text>
            <br />
            <StyledLink replace to={'/account/signup'}>
              <Text size={'small'} color={'blue'}>
                Sign up now!
              </Text>
              &nbsp;&nbsp;
              <Icon size={'xSmall'} name={'arrow-active'} />
            </StyledLink>
          </center>
        </FooterContainer>
      </LoginContainer>
    );
  }
}

export default ({ history, location }) => (
  <AuthReferrer>
    {referrer => (
      <DonorStore.Profile>
        {({ state, store }) => (
          <DonorApiProvider.Login
            onComplete={donor => {
              store.setProfile(donor);
              history.replace(referrer);
            }}
          >
            {({ request, loading }) => (
              <Login login={request} loading={loading} />
            )}
          </DonorApiProvider.Login>
        )}
      </DonorStore.Profile>
    )}
  </AuthReferrer>
);
