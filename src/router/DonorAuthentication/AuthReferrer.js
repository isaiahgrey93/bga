import React, { Component, } from 'react';
import PropTypes from 'prop-types';

const AuthReferrer = React.createContext(false);

export class AuthReferrerProvider extends Component {
  state = {
    referrer: '/',
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

  render() {
    const { referrer, } = this.state;
    const { children, } = this.props;

    return (
      <AuthReferrer.Provider value={referrer}>{children}</AuthReferrer.Provider>
    );
  }
}

AuthReferrerProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

AuthReferrerProvider.defaultProps = {
  children: undefined,
};

export default AuthReferrer.Consumer;
