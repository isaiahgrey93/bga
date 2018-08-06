import * as React from 'react';
import PropTypes from 'prop-types';

import { Motion } from 'react-motion';

const loadingStyle = {
  top: 0,
  left: 0,
  width: '100%',
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
      showContent: children ? 1 : 0,
      showLoading: children ? 0 : 1,
    }}
  >
    {({ showContent, showLoading }) => (
      <div>
        <div
          style={{
            ...loadingStyle,
            opacity: showLoading,
            transition: 'opacity 0.3s ease-in-out',
          }}
        />
        <div
          style={{
            opacity: showContent,
            zIndex: 1,
            position: 'relative',
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
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
