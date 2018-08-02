import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { IconButton, } from 'components/common';

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

  static getDerivedStateFromProps({ location, }, state) {
    const { referrer, } = location.state || {};

    if (referrer && referrer !== state.referrer) {
      return { referrer, };
    }

    if (
      referrer === '/account/auth' ||
      referrer === '/account/login' ||
      referrer === '/account/signup'
    ) {
      return { referrer: false, };
    }

    return {};
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

export default CloseModalButton;
