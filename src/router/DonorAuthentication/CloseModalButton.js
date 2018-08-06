import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { IconButton, } from 'components/common';

import AuthReferrer from './AuthReferrer';

const mainRoute = '/account/auth';

const StyledIconButton = styled(IconButton)`
  top: 30px;
  right: 30px;
  zindex: 10;
  position: absolute;
`;

class CloseModalButton extends Component {
  state = {
    referrer: false,
  };

  static getDerivedStateFromProps({ referrer, }) {
    return { referrer, };
  }

  onClose = () => {
    const { history, match, } = this.props;
    const { referrer, } = this.state;

    const isMainRoute = match.url === mainRoute;

    if (!!referrer && isMainRoute) {
      return this.setState(
        () => ({
          referrer: false,
        }),
        () => history.replace(referrer)
      );
    } else if (!referrer && isMainRoute) {
      return history.replace('/');
    }

    return history.replace(mainRoute);
  };

  render() {
    const { match, } = this.props;

    const isMainRoute = match.url === mainRoute;

    return (
      <StyledIconButton
        size={'small'}
        color={'transparent'}
        onClick={this.onClose}
        name={isMainRoute ? 'close' : 'backward'}
      />
    );
  }
}

CloseModalButton.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default props => (
  <AuthReferrer>
    {referrer => <CloseModalButton {...props} referrer={referrer} />}
  </AuthReferrer>
);
