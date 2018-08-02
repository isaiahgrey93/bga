import React from 'react';

import { Icon, Text, TextInput, WrapperOffset, } from 'components/common';

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

const Login = () => (
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
                />
              </FormItem>
              <FormItem>
                <TextInput
                  icon={'lock'}
                  iconActive={'lock-active'}
                  placeholder={'Password'}
                  type={'password'}
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
                value={'Sign In'}
                color={'secondary'}
              />
            </FormSubmitContainer>
          }
        />
        <FormAlternateActionContainer>
          <Text size={'xSmall'} color={'blue'}>
            Forgot your password?
          </Text>
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

export default Login;
