import React, { Component } from 'react';

import {
  Icon,
  Divider,
  Modal,
  Text,
  TextInput,
  WrapperOffset,
} from 'components/common';

import { DonorApiProvider } from 'providers';

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
  ConfirmationCard,
  ConfirmationContent,
  ConfirmationSubmit,
  ConfirmationMessage,
  ConfirmationTitle,
} from './styles';

class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  onFieldChange = key => e => {
    e.persist();

    this.setState(() => ({ [key]: e.target.value }));
  };

  onSubmit = () => {
    const { signup } = this.props;
    const { name, email, password } = this.state;

    signup({ name, email, password });
  };

  render() {
    const { loading, complete, onVerify } = this.props;
    const { name, email, password } = this.state;
    const disabled = !name || !email || !password;

    return (
      <SignupContainer>
        <CenterContainer>
          <FormContainer>
            <FormHeaderContainer>
              <FormHeaderItem>
                <StyledLink replace to={'/account/login'}>
                  <FormHeaderItemText size={'small'} color={'white'}>
                    SIGN IN
                  </FormHeaderItemText>
                </StyledLink>
              </FormHeaderItem>
              <FormHeaderItem>
                <StyledLink replace to={'/account/signup'}>
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
                      value={name}
                      onChange={this.onFieldChange('name')}
                    />
                  </FormItem>
                  <FormItem>
                    <TextInput
                      icon={'mail'}
                      iconActive={'mail-active'}
                      placeholder={'Email'}
                      value={email}
                      type={'email'}
                      onChange={this.onFieldChange('email')}
                    />
                  </FormItem>
                  <FormItem>
                    <TextInput
                      icon={'lock'}
                      iconActive={'lock-active'}
                      placeholder={'Password'}
                      value={password}
                      type={'password'}
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
                    value={loading ? 'Creating Account..' : 'Create Account'}
                    color={'secondary'}
                    onClick={this.onSubmit}
                    disabled={disabled || loading}
                  />
                </FormSubmitContainer>
              }
            />
            <FormAlternateActionContainer>
              <Text size={'xSmall'} color={'grey2'}>
                By creating a free, personal Givelify account, you are agreeing
                to our Terms of Service
              </Text>
            </FormAlternateActionContainer>
          </FormContainer>
        </CenterContainer>
        <FooterContainer>
          <center>
            <Text size={'xSmall'}>Already a Givelify user?</Text>
            <br />
            <StyledLink replace to={'/account/login'}>
              <Text size={'small'} color={'blue'}>
                Sign in
              </Text>
              &nbsp;&nbsp;
              <Icon size={'xSmall'} name={'arrow-active'} />
            </StyledLink>
          </center>
        </FooterContainer>
        {complete && (
          <Modal active>
            <WrapperOffset
              wrapper={
                <ConfirmationCard>
                  <ConfirmationContent>
                    <ConfirmationTitle>
                      <Text weight={'semiBold'}>
                        Account Created! Please Your Confirm Email Address
                      </Text>
                    </ConfirmationTitle>
                    <Divider />
                    <ConfirmationMessage>
                      <Text size={'small'}>
                        Givelify sends donation receipts and statements to your
                        email. To ensure we have the correct address, check{' '}
                        <Text weight={'semiBold'} size={'small'}>
                          {email}
                        </Text>{' '}
                        for a Givelify verification email and click on the link
                        in there.
                      </Text>
                    </ConfirmationMessage>
                  </ConfirmationContent>
                </ConfirmationCard>
              }
              component={
                <ConfirmationSubmit
                  fluid
                  raised={'low'}
                  value={'Proceed To Login'}
                  color={'primary'}
                  onClick={onVerify}
                />
              }
            />
          </Modal>
        )}
      </SignupContainer>
    );
  }
}

export default ({ history }) => (
  <DonorApiProvider.Signup onComplete={() => null}>
    {({ request, response, loading }) => {
      return (
        <Signup
          signup={request}
          loading={loading}
          complete={!!response}
          onVerify={() => history.push('/account/login')}
        />
      );
    }}
  </DonorApiProvider.Signup>
);
