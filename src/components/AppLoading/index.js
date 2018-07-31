import * as React from 'react';
import PropTypes from 'prop-types';

import { Text } from 'components/common';

import { Motion, spring } from 'react-motion';

const loadingStyle = {
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  color: '#fff',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ffffff',
};

const AppLoading = ({ children }) => (
  <Motion
    defaultStyle={{ showLoading: 0, showContent: 0 }}
    style={{
      showContent: spring(children ? 1 : 0),
      showLoading: spring(children ? 0 : 1, {
        stiffness: children ? 240 : 20,
      }),
    }}
  >
    {({ showContent, showLoading }) => (
      <div>
        <div style={{ ...loadingStyle, opacity: showLoading }}>
          <Text>Loading...</Text>
        </div>
        <div style={{ opacity: showContent, zIndex: 1, position: 'relative' }}>
          {children}
        </div>
      </div>
    )}
  </Motion>
);

AppLoading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

AppLoading.defaultProps = {
  children: undefined,
};

export default AppLoading;
