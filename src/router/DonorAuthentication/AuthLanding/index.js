import React from 'react';
import PropTypes from 'prop-types';

import { Icon, Text, SolidButton, OutlineButton } from 'components/common';

import {
  LandingContainer,
  CenterContainer,
  FooterContainer,
  FacebookButtonContent,
  FacebookButtonText,
  StyledAnchor,
} from './styles';

import { doneeSignupUrl } from './constants';

const AuthLanding = ({ history }) => (
  <LandingContainer>
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
        onClick={() => history.replace('/account/login')}
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
          <FacebookButtonText
            size={'small'}
            weight={'semiBold'}
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
          Organization official?{' '}
          <StyledAnchor href={doneeSignupUrl} target={'_blank'}>
            Create an account
          </StyledAnchor>{' '}
          and increase contributions with Givelify.
        </Text>
      </center>
    </FooterContainer>
  </LandingContainer>
);

AuthLanding.propTypes = {
  history: PropTypes.object.isRequired,
};

export default AuthLanding;
