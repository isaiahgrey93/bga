import React from 'react';

import { Icon, Text, TextInput, WrapperOffset, } from 'components/common';

import {
  SignupContainer,
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

const Signup = () => (
  <SignupContainer>
    <CenterContainer>
      <FormContainer>
        <FormHeaderContainer>
          <FormHeaderItem>
            <StyledLink to={'/account/login'}>
              <FormHeaderItemText size={'small'} color={'white'}>
                SIGN IN
              </FormHeaderItemText>
            </StyledLink>
          </FormHeaderItem>
          <FormHeaderItem>
            <StyledLink to={'/account/signup'}>
              <FormHeaderItemText size={'small'} color={'white'} active>
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
                  icon={'name'}
                  iconActive={'name-active'}
                  placeholder={'Fullname'}
                />
              </FormItem>
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
                value={'Create Account'}
                color={'secondary'}
              />
            </FormSubmitContainer>
          }
        />
        <FormAlternateActionContainer>
          <Text size={'xSmall'} color={'grey2'}>
            By creating a free, personal Givelify account, you are agreeing to
            our Terms of Service
          </Text>
        </FormAlternateActionContainer>
      </FormContainer>
    </CenterContainer>
    <FooterContainer>
      <center>
        <Text size={'xSmall'}>Already a Givelify user?</Text>
        <br />
        <StyledLink to={'/account/login'}>
          <Text size={'small'} color={'blue'}>
            Sign in
          </Text>
          &nbsp;&nbsp;
          <Icon size={'xSmall'} name={'arrow-active'} />
        </StyledLink>
      </center>
    </FooterContainer>
  </SignupContainer>
);

export default Signup;
